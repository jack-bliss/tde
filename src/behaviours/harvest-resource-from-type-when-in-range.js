import distance from "../vectors/distance";

export default function harvestResourceFromTypeWhenInRange({resource, type, amount = 1, range = 20, period = 5} = {}) {
  return (entity, input, world) => {
    if (!entity.inventory.hasOwnProperty(resource)) {
      entity.inventory[resource] = 0;
    }

    const entitiesOfType = world.entities.filter((e) => e.type === type);
    const entitiesWithEnough = entitiesOfType.filter((e) => e.inventory[resource] >= amount);
    const entitiesInRange = entitiesWithEnough.filter((e) => distance(e.position, entity.position) < range);
    

    if (entitiesInRange.length) {

      if (!entity.harvest.hasOwnProperty(resource)) {
        entity.harvest[resource] = {
          resource,
          period,
          timer: 0
        };
      }
      
      const closestEntity = entitiesInRange.reduce((closest, check) => {
        if (distance(check, entity) < distance(closest, entity)) {
          return check;
        }
        return closest;
      }, entitiesInRange[0]);

      entity.harvest[resource].timer += input.dt;

      if (entity.harvest[resource].timer >= period) {
        entity.inventory[resource] += amount;
        closestEntity.inventory[resource] -= amount;
        entity.harvest[resource].timer = 0;
      }

    } else {
      delete entity.harvest[resource];
    }
  }
} 