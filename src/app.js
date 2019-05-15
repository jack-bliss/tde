
import setup from './scripts/setup';
import game from './game';
import render from './render';

const APPROX_FPS = 60;

const world = setup();
let now = Date.now();

const input = {
  dt: 0,
  mouse: {
    x: null, 
    y: null, 
    down: false
  },
  keyRising: {},
  keyDown: {}
}

document.body.addEventListener('keydown', (e) => {
  if (!input.keyDown.hasOwnProperty(e.key)) {
    input.keyRising[e.key] = true;
  }
  input.keyDown[e.key] = true;
});

document.body.addEventListener('keyup', (e) => {
  delete input.keyDown[e.key];
})

document.body.addEventListener('mousemove', (e) => {
  input.mouse.x = e.clientX / 10;
  input.mouse.y = e.clientY / 10;
})

document.body.addEventListener('mousedown', (e) => {
  input.mouse.down = true;
});

document.body.addEventListener('mouseup', (e) => {
  input.mouse.down = false;
});

setInterval(() => {
  input.dt = (Date.now() - now) / 1000;
  now = Date.now();
  const nextWorld = game(world, input);
  render(nextWorld);
}, Math.floor(1000 / APPROX_FPS));
