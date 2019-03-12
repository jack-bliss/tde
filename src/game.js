

export default function game(world, input) {

  const entities = world.entities.map((entity) => {
    // apply behaviours to entities
    entity.behaviours.forEach((behaviour) => {
      behaviour(entity, input, world);
    });

    return entity;
  });

  input.keyRising = {};
  
  return {...world, entities};
}