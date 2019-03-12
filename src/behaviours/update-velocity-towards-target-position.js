import scale from "../vectors/scale";
import normalise from "../vectors/normalise";
import distance from "../vectors/distance";

export default function updateVelocityTowardsTargetPosition() {
  return (entity, input) => {
    if (entity.targetPosition) {
      if (distance(entity.targetPosition, entity.position) > entity.speed * input.dt) {
        const x = (entity.targetPosition.x - entity.position.x);
        const y = (entity.targetPosition.y - entity.position.y);
        entity.velocity = scale(normalise({x, y}), entity.speed);
        entity.direction = normalise({x, y});
      } else {
        entity.position = entity.targetPosition;
        entity.velocity = {
          x: 0,
          y: 0
        }
        delete entity.targetPosition;
      }
    }
  }
}