import Structure from './structure';

export default function Base({x, y}) {
  return {
    ...Structure({x, y}),
    type: 'base'
  }
}