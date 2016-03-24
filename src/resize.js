
import data from './data.js'

export function resizeButtons(p) {
  var s = data.iw / 50
  var newWidth = data.nw + (s * p)
  resize(newWidth)
}

export function resize(newWidth, evt) {
  var t = data.iw / newWidth
  var oldw = data.nw
  var oldh = data.nh
  data.nw = newWidth
  data.nh = data.ih / t

  if (data.nw < data.minw || data.nh < data.minh) {
    data.nw = data.minw
    data.nh = data.minh
  }

  data.kw = data.iw / (data.nw / data.cw)
  data.kh = data.ih / (data.nh / data.ch)
  if (data.kw < data.ow || data.kh < data.oh) {
    data.nw = (data.cw * data.iw) / data.ow
    data.nh = (data.ch * data.ih) / data.oh
    data.kw = data.ow
    data.kh = data.oh
  }

  var t = oldw / data.nw
  if (evt) {
    var mx = evt.clientX - data.cropImageHolder.offsetLeft
    var my = evt.clientY - data.cropImageHolder.offsetTop
  } else {
    var mx = data.cw / 2
    var my = data.ch / 2
  }
  if (mx < 0) {
    mx = 0
  }
  if (my < 0) {
    my = 0
  }
  if (mx > data.cw) {
    mx = data.cw
  }
  if (my > data.ch) {
    my = data.ch
  }

  data.cl = mx - ((mx - data.cl) / t)
  data.ct = my - ((my - data.ct) / t)

  if (data.ct <= (data.ch - data.nh)) {
    data.ct = data.ch - data.nh
  }
  if (data.cl <= (data.cw - data.nw)) {
    data.cl = data.cw - data.nw
  }
  if (data.cl > 0) {
    data.cl = 0
  }
  if (data.ct > 0) {
    data.ct = 0
  }
  data.cropImage.style.top = data.ct + 'px'
  data.cropImage.style.left = data.cl + 'px'
  data.cropImage.style.height = data.nh + 'px'
  data.cropImage.style.width = data.nw + 'px'
}
