export default function dispatch(entity, action) {
  const currentState = entity.states[entity.state];
  const hasAction = currentState.actions.hasOwnProperty(action);
  if (!hasAction) {
    return;
  }
  const nextState = currentState.actions[action];
  const nextBehaviours = entity.states[nextState].behaviours;
  entity.state = nextState;
  entity.behaviours = nextBehaviours;
}
