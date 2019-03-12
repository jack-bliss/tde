import dispatch from "../scripts/dispatch";

export default function toggleSelectedOnKeyPress(key) {
  return (entity, input) => {
    if (input.keyRising[key]) {
      entity.selected = !entity.selected;
      dispatch(entity, entity.selected ? 'selected' : 'deselected');
    }
    Object.keys(input.keyRising).forEach((keyCode) => {
      if (input.keyRising[keyCode] && keyCode !== key) {
        entity.selected = false;
      } 
    });
  }
}