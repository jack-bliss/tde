import magnitude from "./magnitude";

export default function normalise(vector) {
  const mag = magnitude(vector);
  return {
    x: vector.x / mag,
    y: vector.y / mag
  }
}