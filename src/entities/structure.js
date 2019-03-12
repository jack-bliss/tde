import Entity from "./entity";

export default function Structure({x, y}) {
  return {
    ...Entity({x, y}),
    type: 'structure'
  }
}