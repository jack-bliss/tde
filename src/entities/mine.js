import Structure from "./structure";

export default function Mine({x, y}) {
  return {
    ...Structure({x, y}),
    type: 'mine',
    inventory: {
      gold: 100
    },
    behaviours: []
  }
}