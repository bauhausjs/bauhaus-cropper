'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialData = initialData;

var data = {
  iw: 0,
  ih: 0,
  nw: 0,
  nh: 0,
  cw: 0,
  ch: 0,
  cl: 0,
  cr: 0,
  kw: 0,
  kh: 0,
  ow: 0,
  oh: 0,
  max: false,
  circle: false,
  change: false,
  drag: {
    x: 0,
    y: 0,
    lx: 0,
    ly: 0
  },
  dragging: false,
  width: 0,
  height: 0,
  oWidth: 0,
  oHeight: 0,
  zIndex: 100,
  cb: function cb() {
    console.error('bauhaus-cropper: No callback defined!');
  },
  div: null,
  img: null,
  compression: 0.85,
  dataUrl: null
};

function initialData(options, blob, img, dataUrl, cb, div) {
  var iw = img.width;
  var ih = img.height;

  var height = options.height || Math.round(ih / 4);
  var width = options.width || Math.round(iw / 4);
  var max = options.max || true;
  var circle = options.circle || false;

  if (max && max != 'false') {
    max = true;
  } else {
    max = false;
  }
  if (circle && circle != 'false') {
    circle = true;
  } else {
    circle = false;
  }
  var oWidth = width;
  var oHeight = height;
  var winw = window.innerWidth;
  var winh = window.innerHeight;
  var scale = width / height;
  if (height < 300) {
    height = 300;
    width = height * scale;
  }
  if (width < 300) {
    width = 300;
    height = width / scale;
  }
  if (height > winh - 30) {
    height = winh - 30;
    width = height * scale;
  }
  if (width > winw - 30) {
    width = winw - 30;
    height = width / scale;
  }

  if (iw < oWidth || ih < oHeight) {
    return new Error('Image to small!');
  }

  data = Object.assign(data, {
    iw: iw,
    ih: ih,
    nw: iw,
    nh: ih,
    cw: width,
    ch: height,
    cl: 0,
    cr: 0,
    kw: 0,
    kh: 0,
    ow: oWidth,
    oh: oHeight,
    max: max,
    circle: circle,
    change: false,
    drag: {
      x: 0,
      y: 0,
      lx: 0,
      ly: 0
    },
    dragging: false,
    width: width,
    height: height,
    oWidth: oWidth,
    oHeight: oHeight,
    zIndex: 100,
    cb: cb,
    div: div,
    img: img,
    compression: 0.85,
    dataUrl: dataUrl
  });

  if (height / width < ih / iw) {
    var ww = width; // width

    if (ww > 0) {
      var t = iw / ww;
    } else {
      return new Error('Broken image!');
    }
    iw = ww;
    ih = ih / t;
  } else {
    var ww = height; // height

    if (ww > 0) {
      var t = ih / ww;
    } else {
      return new Error('Broken image!');
    }
    ih = ww;
    iw = iw / t;
  }

  data.minw = iw;
  data.minh = ih;
  data.nw = iw;
  data.nh = ih;
  data.ct = 0 - (ih / 2 - height / 2);
  data.cl = 0 - (iw / 2 - width / 2);
  data.kw = data.iw / (data.nw / data.cw);
  data.kh = data.ih / (data.nh / data.ch);
}

exports.default = data;