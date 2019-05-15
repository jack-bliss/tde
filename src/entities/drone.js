import Mob from "./mob";
import setTargetPositionWithMouseWhenSelected from "../behaviours/set-target-position-with-mouse-when-selected";
import toggleSelectedOnKeyPress from "../behaviours/toggle-selected-on-key-press";
import updatePositionWithVelocity from "../behaviours/update-position-with-velocity";
import updateVelocityTowardsTargetPosition from "../behaviours/update-velocity-towards-target-position";
import setTargetPositionRandomly from "../behaviours/set-target-position-randomly";

export default function Drone({x, y, selectorKey}) {
  return {
    ...Mob({
      x, 
      y, 
      state: 'manual',
      states: {
        manual: {
          actions: {
          },
          behaviours: [
            updatePositionWithVelocity(),
            updateVelocityTowardsTargetPosition(),
            toggleSelectedOnKeyPress(selectorKey),
            setTargetPositionWithMouseWhenSelected()
          ]
        }
      }
    }),
    type: 'drone',
    selected: false
  }
}