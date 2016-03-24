"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function loadImage(dataUrl, cb) {
  var img = new Image();
  img.onload = function () {
    cb(img, dataUrl);
  };
  img.src = dataUrl;
}

exports.default = function (blob, cb) {
  if (blob instanceof Blob === true) {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      var dataUrl = e.target.result;
      loadImage(dataUrl, cb);
    };
    fileReader.readAsDataURL(blob);
  } else {
    loadImage(blob, cb);
  }
};

module.exports = exports['default'];