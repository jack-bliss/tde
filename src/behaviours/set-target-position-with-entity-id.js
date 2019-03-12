export default function setTargetPositionWithEntityID(entityID) {
  return (entity, _, world) => {
    const targetMob = world.entities.find((entity) => entity._id === entityID);
    if (targetMob) {
      entity.targetPosition = {...targetMob.position};
    }
  }
}