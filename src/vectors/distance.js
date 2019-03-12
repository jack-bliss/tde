import magnitude from "./magnitude";

export default function distance(v1, v2) {
  const diff = {
    x: v2.x - v1.x,
    y: v2.y - v1.y
  }
  return magnitude(diff);
}