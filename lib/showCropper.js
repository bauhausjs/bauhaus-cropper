'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

var _icons = require('../icons.js');

var _icons2 = _interopRequireDefault(_icons);

var _events = require('./events.js');

var events = _interopRequireWildcard(_events);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (div) {
  // BackgroundLeft
  var ileft = document.createElement('div');
  ileft.style.position = 'absolute';
  ileft.style.top = '0px';
  ileft.style.left = '0px';
  ileft.style.bottom = '0px';
  ileft.style.right = '50%';
  ileft.style.marginRight = _data2.default.width / 2 + 'px';
  ileft.style.background = 'rgba(0, 0, 0, 0.79)';
  ileft.style.zIndex = _data2.default.zIndex;

  // BackgroundTop
  var iTop = document.createElement('div');
  iTop.style.position = 'absolute';
  iTop.style.top = '0px';
  iTop.style.left = '50%';
  iTop.style.bottom = '50%';
  iTop.style.right = '50%';
  iTop.style.marginBottom = _data2.default.height / 2 + 'px';
  iTop.style.marginLeft = 0 - _data2.default.width / 2 + 'px';
  iTop.style.marginRight = 0 - _data2.default.width / 2 + 'px';
  iTop.style.background = 'rgba(0, 0, 0, 0.79)';
  iTop.style.zIndex = _data2.default.zIndex;

  // BackgroundRight
  var iRight = document.createElement('div');
  iRight.style.position = 'absolute';
  iRight.style.top = '0px';
  iRight.style.left = '50%';
  iRight.style.bottom = '0px';
  iRight.style.right = '0px';
  iRight.style.marginLeft = _data2.default.width / 2 + 'px';
  iRight.style.background = 'rgba(0, 0, 0, 0.79)';
  iRight.style.zIndex = _data2.default.zIndex;

  // BackgroundBottom
  var iBottom = document.createElement('div');
  iBottom.style.position = 'absolute';
  iBottom.style.top = '50%';
  iBottom.style.left = '50%';
  iBottom.style.bottom = '0px';
  iBottom.style.right = '50%';
  iBottom.style.marginTop = _data2.default.height / 2 + 'px';
  iBottom.style.marginLeft = 0 - _data2.default.width / 2 + 'px';
  iBottom.style.marginRight = 0 - _data2.default.width / 2 + 'px';
  iBottom.style.background = 'rgba(0, 0, 0, 0.79)';
  iBottom.style.zIndex = _data2.default.zIndex;

  var winw = window.innerWidth;
  var winh = window.innerHeight;
  if (_data2.default.circle) {
    var rad = Math.sqrt(winw * winw, winh * winh) - (_data2.default.height + _data2.default.width) / 2;
  } else {
    var rad = (winh - _data2.default.height) / 2;
    if ((winw - _data2.default.width) / 2 > rad) {
      rad = (winw - _data2.default.width) / 2;
    }
  }

  var iCropShow = document.createElement('div');
  iCropShow.style.position = 'absolute';
  iCropShow.style.top = '50%';
  iCropShow.style.left = '50%';
  iCropShow.style.width = _data2.default.width + 'px';
  iCropShow.style.height = _data2.default.height + 'px';
  iCropShow.style.marginTop = -(_data2.default.height / 2 + rad) + 'px';
  iCropShow.style.marginLeft = -(_data2.default.width / 2 + rad) + 'px';
  iCropShow.style.background = 'rgba(0, 0, 0, 0.0)';
  iCropShow.style.border = rad + 'px solid rgba(0, 0, 0, 0.79)';
  if (_data2.default.circle) {
    iCropShow.style.borderRadius = '50%';
  }
  iCropShow.style.zIndex = _data2.default.zIndex;

  var overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.top = '0px';
  overlay.style.left = '0px';
  overlay.style.right = '0px';
  overlay.style.bottom = '0px';
  overlay.style.background = 'transparent';
  overlay.style.zIndex = _data2.default.zIndex + 1;

  var menubar = document.createElement('div');
  menubar.style.position = 'absolute';
  menubar.style.right = '5px';
  menubar.style.bottom = '14px';
  menubar.style.zIndex = _data2.default.zIndex + 2 + '';
  menubar.style.fontFamily = 'Arial';
  menubar.style.fontSize = '16px';
  menubar.style.color = '#ffffff';
  menubar.style.textAlign = 'right';

  var submit = document.createElement('span');
  submit.style.position = 'relative';
  submit.style.padding = '9px';
  submit.style.borderRadius = '2px';
  submit.style.marginRight = '5px';
  submit.innerHTML = _icons2.default.checkmark;
  submit.style.cursor = 'pointer';
  submit.style.fill = '#ffffff';
  submit.addEventListener('click', events.submit);

  var cancel = document.createElement('span');
  cancel.style.position = 'relative';
  cancel.style.padding = '9px';
  cancel.style.borderRadius = '2px';
  cancel.style.marginRight = '10px';
  cancel.innerHTML = _icons2.default.cross;
  cancel.style.cursor = 'pointer';
  cancel.style.fill = '#ffffff';
  cancel.addEventListener('click', events.cancel);

  var plus = document.createElement('span');
  plus.style.position = 'relative';
  plus.style.padding = '9px';
  plus.style.borderRadius = '2px';
  plus.style.marginRight = '10px';
  plus.innerHTML = _icons2.default.zoomIn;
  plus.style.cursor = 'pointer';
  plus.style.fill = '#ffffff';
  plus.addEventListener('click', events.resizePlus);
  plus.addEventListener('dblclick', events.resizePlus2x);

  var minus = document.createElement('span');
  minus.style.position = 'relative';
  minus.style.padding = '9px';
  minus.style.borderRadius = '2px';
  minus.style.marginRight = '10px';
  minus.innerHTML = _icons2.default.zoomOut;
  minus.style.cursor = 'pointer';
  minus.style.fill = '#ffffff';
  minus.addEventListener('click', events.resizeMinus);
  minus.addEventListener('dblclick', events.resizeMinus2x);

  menubar.appendChild(plus);
  menubar.appendChild(minus);
  menubar.appendChild(cancel);
  menubar.appendChild(submit);

  var img = document.createElement('img');
  img.setAttribute('draggable', 'false');
  img.setAttribute('src', _data2.default.dataUrl);
  img.style.position = 'absolute';
  /*img.style.height = data.ih + 'px'
  img.style.width = data.iw + 'px'*/
  img.style.height = _data2.default.nh + 'px';
  img.style.width = _data2.default.nw + 'px';
  img.style.top = _data2.default.ct + 'px';
  img.style.left = _data2.default.cl + 'px';
  img.style.padding = '0';
  img.style.margin = '0';
  img.style.border = '0px solid #ff0000';
  img.style.maxWidth = 'none';
  img.style.zIndex = _data2.default.zIndex - 1 + '';

  var size = document.createElement('div');
  // size.id = 'bauhausCropImageHolder'
  size.style.position = 'absolute';
  size.style.top = '50%';
  size.style.left = '50%';
  size.style.margin = '0';
  size.style.marginLeft = 0 - _data2.default.width / 2 + 'px';
  size.style.marginTop = 0 - _data2.default.height / 2 + 'px';
  size.style.height = _data2.default.height + 'px';
  size.style.width = _data2.default.width + 'px';
  size.style.border = '0px solid #ff0000';
  size.style.zIndex = _data2.default.zIndex - 1 + '';
  size.style.padding = '0';
  size.appendChild(img);
  //size.innerHTML = '<img draggable="false" id="bauhausCropImage" src="' + data.dataUrl + '" style="z-index:' + (data.zIndex - 1) + '; position: absolute; width: ' + data.iw + 'px; height: ' + data.ih + 'px; left: ' + data.cl + 'px; top: ' + data.ct + 'px; padding: 0; margin:0; border: 0px solid black; max-width: none;" />';

  _data2.default.cropImage = img;
  _data2.default.cropImageHolder = size;

  div.style.background = 'rgba(255, 0, 0, 0)';
  div.addEventListener('mousedown', events.drag);
  div.addEventListener('mouseup', events.drop);
  div.addEventListener('mousemove', events.move);
  div.addEventListener('mousewheel', events.scroll);
  div.addEventListener('wheel', events.scroll);
  div.addEventListener('mouseout', events.mouseout);
  div.appendChild(size);
  div.appendChild(iCropShow);
  div.appendChild(overlay);
  div.appendChild(menubar);
};

module.exports = exports['default'];