(function (root) {
  'use strict';
  function rectanglesOverlap(a, b) {
    for (const r of [a, b]) {
      if (!r || typeof r !== 'object' || !Number.isFinite(r.x) || !Number.isFinite(r.y) || !Number.isFinite(r.width) || !Number.isFinite(r.height) || r.width <= 0 || r.height <= 0) return false;
    }
    return Math.abs(a.x - b.x) < (a.width + b.width) / 2 &&
           Math.abs(a.y - b.y) < (a.height + b.height) / 2;
  }
  function overlapArea(a, b) {
    if (!rectanglesOverlap(a, b)) return 0;
    const overlapWidth = (a.width + b.width) / 2 - Math.abs(a.x - b.x);
    const overlapHeight = (a.height + b.height) / 2 - Math.abs(a.y - b.y);
    return Math.max(0, overlapWidth) * Math.max(0, overlapHeight);
  }
  root.overlapArea = overlapArea;
  root.rectanglesOverlap = rectanglesOverlap;
  if (typeof module !== 'undefined') module.exports = { rectanglesOverlap, overlapArea };
})(typeof globalThis !== 'undefined' ? globalThis : this);
