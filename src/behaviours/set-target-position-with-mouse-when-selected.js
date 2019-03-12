export default function setTargetPositionWithMouseWhenSelected() {
  return (entity, input) => {
    if (input.mouse.down && entity.selected) {
      entity.targetPosition = {x: input.mouse.x, y: input.mouse.y};
    }
  }
}