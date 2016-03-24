'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var div = document.createElement('div');
  //div.id = 'bauhausCropImageWrapper'
  var css = '-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; background: rgba(0, 0, 0, 0.79) !important; position: fixed !important; top: 0px !important; left: 0px !important; right: 0px !important; bottom: 0px !important; overflow: hidden !important; z-Index: ' + _data2.default.zIndex + ' !important';
  div.setAttribute('style', css);
  div.setAttribute('dragable', 'false');

  var indiv = document.createElement('div');
  indiv.style.position = 'absolute';
  indiv.style.top = '50%';
  indiv.style.width = '100%';
  indiv.style.textAlign = 'center';
  indiv.style.color = '#ffffff';
  indiv.style.fontFamily = 'Arial';
  indiv.style.fontSize = '18px';
  indiv.innerHTML = _icons2.default.gears;

  div.appendChild(indiv);
  document.body.appendChild(div);
  return div;
};

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

var _icons = require('../icons.js');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];