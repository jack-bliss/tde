export default function updatePositionWithVelocity() {
  return (entity, input) => {
    entity.position.x += entity.velocity.x * input.dt;
    entity.position.y += entity.velocity.y * input.dt;
  }
}