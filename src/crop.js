
import pica from 'pica'
import data from './data.js'
import overscrolling from './overscrolling.js'

export default () => {
  var canvas = document.createElement('canvas');

  var kw = Math.round(data.kw);
  var kh = Math.round(data.kh);
  var ct = Math.round(data.ct);
  var cl = Math.round(data.cl);
  var nw = Math.round(data.nw);
  var nh = Math.round(data.nh);

  var srcCanvas = document.createElement('canvas');
  srcCanvas.width = kw;
  srcCanvas.height = kh;

  var ctx = srcCanvas.getContext('2d');

  var srct = data.kw / data.cw;
  var srcnw = nw * srct;
  var srcnh = nh * srct;
  var srccl = cl * srct;
  var srcct = ct * srct;

  ctx.drawImage(data.img, srccl, srcct, srcnw, srcnh);
  if (data.max) {
    canvas.width = kw;
    canvas.height = kh;
  } else {
    canvas.width = data.ow;
    canvas.height = data.oh;
  }

  pica.resizeCanvas(srcCanvas, canvas, {}, function(err) {
    if (err) {
      overscrolling(false)
      data.div.parentNode.removeChild(data.div)
      return data.cb(err)
    }
    var dataURL = canvas.toDataURL('image/jpeg', data.compression)

    overscrolling(false)
    data.div.parentNode.removeChild(data.div)
    data.cb(null, dataURL, dataURLtoBlob(dataURL), data)
  });
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}
