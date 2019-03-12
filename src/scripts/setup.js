import Drone from "../entities/drone";
import Cretin from "../entities/cretin";
import setTargetPositionRandomly from "../behaviours/set-target-position-randomly";
import setTargetPositionWithList from "../behaviours/set-target-position-with-list";
import Mine from "../entities/mine";
import Base from "../entities/base";

// create state
export default function setup() {

  const player = Drone({x: 5, y: 3, selectorKey: 'd'});

  const world = {
    entities: [
      player,
      Cretin({x: 200, y: 500, behaviours: [
        setTargetPositionRandomly()
      ]}),
      Cretin({x: 400, y: 400, behaviours: [
        setTargetPositionWithList([
          {x: 400, y: 200},
          {x: 200, y: 200},
          {x: 300, y: 350}
        ])
      ]}),
      Mine({x: 100, y: 100}),
      Base({x: 0, y: 0})
    ]
  }

  return world;
}