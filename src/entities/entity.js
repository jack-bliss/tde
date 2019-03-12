import createID from '../scripts/create-id';

const defaultStates = {
  default: {
    actions: {},
    behaviours: []
  }
}


export default function Entity({x = 0, y = 0, states = {}, state = 'default'} = {}) {
  const builtStates = {
    ...defaultStates,
    ...states
  }
  return {
    _id: createID(),
    type: 'entity',
    inventory: {},
    state,
    states: builtStates,
    behaviours: builtStates[state].behaviours,
    position: {
      x,
      y
    }
  }
}