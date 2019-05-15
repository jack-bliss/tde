import Drone from "../entities/drone";
import Woods from '../maps/woods';

// create state
export default function setup() {

  const player = Drone({x: 1, y: 1, selectorKey: 'd'});

  const world = {
    map: Woods,
    entities: [
      player
    ]
  }
  return world;
}