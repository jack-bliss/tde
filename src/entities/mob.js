import Entity from "./entity";

export default function Mob({x, y, states = {}, state = 'default'}) {
  return {
    ...Entity({x, y, states, state}),
    type: 'mob',
    speed: 100,
    harvest: {},
    direction: {
      x: 0,
      y: 0
    },
    velocity: {
      x: 0,
      y: 0
    }
  }
}
