'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stopOverScrolling;

var cache = { active: false };

function stopOverScrolling(bool) {
  if (bool) {
    if (cache.active === false) {
      cache.height = document.body.style.height;
      cache.width = document.body.style.width;
      cache.overflow = document.body.style.overflow;
    }
    cache.active = true;
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.height = cache.height;
    document.body.style.width = cache.width;
    document.body.style.overflow = cache.overflow;
    cache.active = false;
  }
}
module.exports = exports['default'];