import distance from "../vectors/distance";

export default function depositAllOfResourceToTypeWhenInRange({resource, type, range = 20}) {
  return (entity, _, world) => {

    const entitiesOfType = world.entities.filter((e) => e.type === type);
    const entitiesInRange = entitiesOfType.filter((e) => distance(e.position, entity.position) < range);
    

    if (entitiesInRange.length) {
      
      const closestEntity = entitiesInRange.reduce((closest, check) => {
        if (distance(check, entity) < distance(closest, entity)) {
          return check;
        }
        return closest;
      }, entitiesInRange[0]);

      closestEntity.inventory[resource] = entity.inventory[resource];
      entity.inventory[resource] = 0;

    }
  }
} 