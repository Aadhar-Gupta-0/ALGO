(function (root) {
  'use strict';
  function rectanglesOverlap(a, b) {
    for (const r of [a, b]) {
      if (!Number.isFinite(r.x) || !Number.isFinite(r.y) || !Number.isFinite(r.width) || !Number.isFinite(r.height) || r.width <= 0 || r.height <= 0) return false;
    }
    return Math.abs(a.x - b.x) < (a.width + b.width) / 2 &&
           Math.abs(a.y - b.y) < (a.height + b.height) / 2;
  }
  root.rectanglesOverlap = rectanglesOverlap;
  if (typeof module !== 'undefined') module.exports = { rectanglesOverlap };
})(typeof globalThis !== 'undefined' ? globalThis : this);
