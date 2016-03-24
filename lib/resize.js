'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeButtons = resizeButtons;
exports.resize = resize;

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resizeButtons(p) {
  var s = _data2.default.iw / 50;
  var newWidth = _data2.default.nw + s * p;
  resize(newWidth);
}

function resize(newWidth, evt) {
  var t = _data2.default.iw / newWidth;
  var oldw = _data2.default.nw;
  var oldh = _data2.default.nh;
  _data2.default.nw = newWidth;
  _data2.default.nh = _data2.default.ih / t;

  if (_data2.default.nw < _data2.default.minw || _data2.default.nh < _data2.default.minh) {
    _data2.default.nw = _data2.default.minw;
    _data2.default.nh = _data2.default.minh;
  }

  _data2.default.kw = _data2.default.iw / (_data2.default.nw / _data2.default.cw);
  _data2.default.kh = _data2.default.ih / (_data2.default.nh / _data2.default.ch);
  if (_data2.default.kw < _data2.default.ow || _data2.default.kh < _data2.default.oh) {
    _data2.default.nw = _data2.default.cw * _data2.default.iw / _data2.default.ow;
    _data2.default.nh = _data2.default.ch * _data2.default.ih / _data2.default.oh;
    _data2.default.kw = _data2.default.ow;
    _data2.default.kh = _data2.default.oh;
  }

  var t = oldw / _data2.default.nw;
  if (evt) {
    var mx = evt.clientX - _data2.default.cropImageHolder.offsetLeft;
    var my = evt.clientY - _data2.default.cropImageHolder.offsetTop;
  } else {
    var mx = _data2.default.cw / 2;
    var my = _data2.default.ch / 2;
  }
  if (mx < 0) {
    mx = 0;
  }
  if (my < 0) {
    my = 0;
  }
  if (mx > _data2.default.cw) {
    mx = _data2.default.cw;
  }
  if (my > _data2.default.ch) {
    my = _data2.default.ch;
  }

  _data2.default.cl = mx - (mx - _data2.default.cl) / t;
  _data2.default.ct = my - (my - _data2.default.ct) / t;

  if (_data2.default.ct <= _data2.default.ch - _data2.default.nh) {
    _data2.default.ct = _data2.default.ch - _data2.default.nh;
  }
  if (_data2.default.cl <= _data2.default.cw - _data2.default.nw) {
    _data2.default.cl = _data2.default.cw - _data2.default.nw;
  }
  if (_data2.default.cl > 0) {
    _data2.default.cl = 0;
  }
  if (_data2.default.ct > 0) {
    _data2.default.ct = 0;
  }
  _data2.default.cropImage.style.top = _data2.default.ct + 'px';
  _data2.default.cropImage.style.left = _data2.default.cl + 'px';
  _data2.default.cropImage.style.height = _data2.default.nh + 'px';
  _data2.default.cropImage.style.width = _data2.default.nw + 'px';
}