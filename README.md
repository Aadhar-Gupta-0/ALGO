# ALGO — Collision Detection Lab

An interactive educational demonstration of **axis-aligned bounding box (AABB)** collision detection, built with p5.js and p5.play. This edition turns a simple moving-rectangle demo into a responsive learning lab.

## Features
- Move a rectangle with a pointer, touch, or arrow keys.
- See collisions with immediate visual feedback.
- Live count of times collision begins; press **R** to reset.
- Separate, tested AABB collision function.

## Run
Open \`index.html\` or serve with \`python -m http.server 8000\`.

## Tests
\`node test-collision.js\` validates overlap, edge-only contact, and invalid rectangles. \`node --check sketch.js\` checks JavaScript syntax.
