import Mob from "./mob";
import updatePositionWithVelocity from "../behaviours/update-position-with-velocity";
import updateVelocityTowardsTargetPosition from "../behaviours/update-velocity-towards-target-position";

export default function Cretin({x, y, behaviours = []}) {
  return {
    ...Mob({
      x, 
      y, 
      behaviours,
      states: {
        default: {
          actions: {},
          behaviours: [
            updatePositionWithVelocity(),
            updateVelocityTowardsTargetPosition(),
            ...behaviours
          ]
        }
      }
    }),
    type: 'cretin',
    speed: 6
  }
}