'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pica = require('pica');

var _pica2 = _interopRequireDefault(_pica);

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

var _overscrolling = require('./overscrolling.js');

var _overscrolling2 = _interopRequireDefault(_overscrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var canvas = document.createElement('canvas');

  var kw = Math.round(_data2.default.kw);
  var kh = Math.round(_data2.default.kh);
  var ct = Math.round(_data2.default.ct);
  var cl = Math.round(_data2.default.cl);
  var nw = Math.round(_data2.default.nw);
  var nh = Math.round(_data2.default.nh);

  var srcCanvas = document.createElement('canvas');
  srcCanvas.width = kw;
  srcCanvas.height = kh;

  var ctx = srcCanvas.getContext('2d');

  var srct = _data2.default.kw / _data2.default.cw;
  var srcnw = nw * srct;
  var srcnh = nh * srct;
  var srccl = cl * srct;
  var srcct = ct * srct;

  ctx.drawImage(_data2.default.img, srccl, srcct, srcnw, srcnh);
  if (_data2.default.max) {
    canvas.width = kw;
    canvas.height = kh;
  } else {
    canvas.width = _data2.default.ow;
    canvas.height = _data2.default.oh;
  }

  _pica2.default.resizeCanvas(srcCanvas, canvas, {}, function (err) {
    if (err) {
      (0, _overscrolling2.default)(false);
      _data2.default.div.parentNode.removeChild(_data2.default.div);
      return _data2.default.cb(err);
    }
    var dataURL = canvas.toDataURL('image/jpeg', _data2.default.compression);

    (0, _overscrolling2.default)(false);
    _data2.default.div.parentNode.removeChild(_data2.default.div);
    _data2.default.cb(null, dataURL, dataURLtoBlob(dataURL), _data2.default);
  });
};

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
module.exports = exports['default'];