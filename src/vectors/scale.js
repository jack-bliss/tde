export default function scale(vector, scalar) {
  return {
    x: vector.x * scalar,
    y: vector.y * scalar
  }
}