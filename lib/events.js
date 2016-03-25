'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scroll = scroll;
exports.move = move;
exports.drag = drag;
exports.drop = drop;
exports.mouseout = mouseout;
exports.resizePlus = resizePlus;
exports.resizeMinus = resizeMinus;
exports.resizePlus2x = resizePlus2x;
exports.resizeMinus2x = resizeMinus2x;
exports.submit = submit;
exports.exit = exit;
exports.cancel = cancel;

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

var _resize = require('./resize.js');

var _overscrolling = require('./overscrolling.js');

var _overscrolling2 = _interopRequireDefault(_overscrolling);

var _blackDivWrapper = require('./blackDivWrapper.js');

var _blackDivWrapper2 = _interopRequireDefault(_blackDivWrapper);

var _crop = require('./crop.js');

var _crop2 = _interopRequireDefault(_crop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scroll(evt) {
  if (evt.wheelDeltaY) {
    var move = evt.wheelDeltaY;
  }
  if (evt.deltaY) {
    var move = evt.deltaY;
  }
  if (move) {
    var add = 10;
    if (move > 0) {
      var newWidth = _data2.default.nw + move;
    }
    if (move < 0) {
      var newWidth = _data2.default.nw + move;
    }

    if (newWidth && newWidth > 0) {
      (0, _resize.resize)(newWidth, evt);
    }
  }
  return false;
}

function move(evt) {
  if (_data2.default.dragging) {
    var x = evt.clientX - _data2.default.drag.x;
    var y = evt.clientY - _data2.default.drag.y;
    if (_data2.default.ct + y > 0) {
      y = -_data2.default.ct;
    }
    if (_data2.default.ct + y < _data2.default.ch - _data2.default.nh) {
      y = _data2.default.ch - _data2.default.nh - _data2.default.ct;
    }

    if (_data2.default.cl + x > 0) {
      x = -_data2.default.cl;
    }
    if (_data2.default.cl + x < _data2.default.cw - _data2.default.nw) {
      x = _data2.default.cw - _data2.default.nw - _data2.default.cl;
    }

    _data2.default.drag.lx = _data2.default.cl + x;
    _data2.default.drag.ly = _data2.default.ct + y;
    _data2.default.change = true;
    _data2.default.cropImage.style.top = _data2.default.ct + y + 'px';
    _data2.default.cropImage.style.left = _data2.default.cl + x + 'px';
  }
}

function drag(evt) {
  _data2.default.dragging = true;
  _data2.default.drag.x = evt.clientX;
  _data2.default.drag.y = evt.clientY;
  _data2.default.change = false;
}

function drop(evt) {
  if (_data2.default.dragging) {
    _data2.default.dragging = false;
    if (_data2.default.change === true) {
      _data2.default.ct = _data2.default.drag.ly;
      _data2.default.cl = _data2.default.drag.lx;
    }
  }
}

function mouseout(evt) {
  drop();
}

function resizePlus() {
  (0, _resize.resizeButtons)(1);
}

function resizeMinus() {
  (0, _resize.resizeButtons)(-1);
}

function resizePlus2x() {
  (0, _resize.resizeButtons)(5);
}

function resizeMinus2x() {
  (0, _resize.resizeButtons)(-5);
}

function submit(evt) {
  exit();
  var div = (0, _blackDivWrapper2.default)();
  _data2.default.div = div;
  (0, _crop2.default)();
  return false;
}

function exit() {
  (0, _overscrolling2.default)(false);
  _data2.default.div.parentNode.removeChild(_data2.default.div);
}

function cancel(evt) {
  exit();
  _data2.default.cb('CANCEL');
  return false;
}