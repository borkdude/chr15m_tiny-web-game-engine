import { emoji, container, scene, frame, collided, redraw } from "./twge.js";
// or "https://cdn.jsdelivr.net/gh/chr15m/tiny-web-game-engine/twge.js"

var ghost = await emoji("👻");
var tree = await emoji("🌲", {"x": -2});

var s = scene();
s.add(tree);
s.add(ghost);

while (true) {
  var [ elapsed, events ] = await frame();
  let collisions = collided(ghost, [tree], 10);
  if (collisions.length) {
    tree.scale = 0.1;
  } else {
    tree.scale = 1;
  }
  if (events.keyheld.ArrowRight) {
    ghost.x += 0.1;
  }
  if (events.keyheld.ArrowLeft) {
    ghost.x -= 0.1;
  }
  if (events.keyheld.ArrowUp) {
    ghost.y += 0.1;
  }
  if (events.keyheld.ArrowDown) {
    ghost.y -= 0.1;
  }
  redraw(s);
}
