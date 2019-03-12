export default function setTargetPositionWithMouse() {
  return (entity, input) => {
    if (input.mouse.down) {
      entity.targetPosition = {x: input.mouse.x, y: input.mouse.y};
    }
  }
}