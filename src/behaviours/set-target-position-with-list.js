export default function setTargetPositionWithList(points) {
  let nextPoint = 0;
  return (entity) => {
    if (!entity.targetPosition) {
      nextPoint ++;
      if (nextPoint > points.length - 1) {
        nextPoint = 0;
      }
      entity.targetPosition = {
        x: points[nextPoint].x,
        y: points[nextPoint].y
      }
    }
  }
}