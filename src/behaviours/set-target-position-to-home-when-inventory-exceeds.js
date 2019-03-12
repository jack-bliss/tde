export default function setTargetPositionToHomeWhenInventoryExceeds({resource, amount = 5}) {
  return (entity) => {
    if (entity.inventory[resource] >= amount && !entity.targetPosition) {
      entity.targetPosition = {x: 0, y: 0};
    }
  }
}