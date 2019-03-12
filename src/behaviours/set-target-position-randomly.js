export default function setTargetPositionRandomly() {
  return (entity) => {
    if (!entity.targetPosition) {
      entity.targetPosition = {
        x: Math.ceil(Math.random() * 500),
        y: Math.ceil(Math.random() * 500)
      }
    }
  }
}