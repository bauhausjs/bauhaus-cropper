
import data from './data.js'
import { resize, resizeButtons } from './resize.js'
import overscrolling from './overscrolling.js'
import blackDivWrapper from './blackDivWrapper.js'
import resizeAndReturn from './crop.js'

export function scroll(evt) {
  if (evt.wheelDeltaY) {
    var move = evt.wheelDeltaY
  }
  if (evt.deltaY) {
    var move = evt.deltaY
  }
  if (move) {
    var add = 10
    if (move > 0) {
      var newWidth = data.nw + move
    }
    if (move < 0) {
      var newWidth = data.nw + move
    }

    if (newWidth && newWidth > 0) {
      resize(newWidth, evt)
    }
  }
  return false
}

export function move(evt) {
  if (data.dragging) {
    var x = evt.clientX - data.drag.x
    var y = evt.clientY - data.drag.y
    if (data.ct + y > 0) {
      y = -data.ct
    }
    if (data.ct + y < (data.ch - data.nh)) {
      y = data.ch - data.nh - data.ct
    }

    if (data.cl + x > 0) {
      x = -data.cl
    }
    if (data.cl + x < (data.cw - data.nw)) {
      x = data.cw - data.nw - data.cl
    }

    data.drag.lx = data.cl + x
    data.drag.ly = data.ct + y
    data.change = true
    data.cropImage.style.top = (data.ct + y) + 'px'
    data.cropImage.style.left = (data.cl + x) + 'px'
  }
}

export function drag(evt) {
  data.dragging = true
  data.drag.x = evt.clientX
  data.drag.y = evt.clientY
  data.change = false
}

export function drop(evt) {
  if (data.dragging) {
    data.dragging = false
    if (data.change === true) {
      data.ct = data.drag.ly
      data.cl = data.drag.lx
    }
  }
}

export function mouseout(evt) {
  drop()
}

export function resizePlus() {
  resizeButtons(1)
}

export function resizeMinus() {
  resizeButtons(-1)
}

export function resizePlus2x() {
  resizeButtons(5)
}

export function resizeMinus2x() {
  resizeButtons(-5)
}

export function submit(evt) {
  exit()
  var div = blackDivWrapper()
  data.div = div
  resizeAndReturn()
  return false;
}

export function exit() {
  overscrolling(false)
  data.div.parentNode.removeChild(data.div)
}

export function cancel(evt) {
  exit()
  data.cb('CANCEL')
  return false
}
