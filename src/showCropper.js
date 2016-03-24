
import data from './data.js'
import icons from '../icons.js'

import * as events from './events.js'

export default (div) => {
  // BackgroundLeft
  var ileft = document.createElement('div')
  ileft.style.position = 'absolute'
  ileft.style.top = '0px'
  ileft.style.left = '0px'
  ileft.style.bottom = '0px'
  ileft.style.right = '50%'
  ileft.style.marginRight = ((data.width / 2)) + 'px'
  ileft.style.background = 'rgba(0, 0, 0, 0.79)'
  ileft.style.zIndex = data.zIndex

  // BackgroundTop
  var iTop = document.createElement('div')
  iTop.style.position = 'absolute'
  iTop.style.top = '0px'
  iTop.style.left = '50%'
  iTop.style.bottom = '50%'
  iTop.style.right = '50%'
  iTop.style.marginBottom = ((data.height / 2)) + 'px'
  iTop.style.marginLeft = (0 - (data.width / 2)) + 'px'
  iTop.style.marginRight = (0 - (data.width / 2)) + 'px'
  iTop.style.background = 'rgba(0, 0, 0, 0.79)'
  iTop.style.zIndex = data.zIndex

  // BackgroundRight
  var iRight = document.createElement('div')
  iRight.style.position = 'absolute'
  iRight.style.top = '0px'
  iRight.style.left = '50%'
  iRight.style.bottom = '0px'
  iRight.style.right = '0px'
  iRight.style.marginLeft = ((data.width / 2)) + 'px'
  iRight.style.background = 'rgba(0, 0, 0, 0.79)'
  iRight.style.zIndex = data.zIndex

  // BackgroundBottom
  var iBottom = document.createElement('div')
  iBottom.style.position = 'absolute'
  iBottom.style.top = '50%'
  iBottom.style.left = '50%'
  iBottom.style.bottom = '0px'
  iBottom.style.right = '50%'
  iBottom.style.marginTop = ((data.height / 2)) + 'px'
  iBottom.style.marginLeft = (0 - (data.width / 2)) + 'px'
  iBottom.style.marginRight = (0 - (data.width / 2)) + 'px'
  iBottom.style.background = 'rgba(0, 0, 0, 0.79)'
  iBottom.style.zIndex = data.zIndex

  var winw = window.innerWidth
  var winh = window.innerHeight
  if (data.circle) {
    var rad = Math.sqrt(winw * winw, winh * winh) - (data.height + data.width) / 2
  } else {
    var rad = (winh - data.height) / 2
    if ((winw - data.width) / 2 > rad) {
      rad = (winw - data.width) / 2
    }
  }

  var iCropShow = document.createElement('div')
  iCropShow.style.position = 'absolute'
  iCropShow.style.top = '50%'
  iCropShow.style.left = '50%'
  iCropShow.style.width = data.width + 'px'
  iCropShow.style.height = data.height + 'px'
  iCropShow.style.marginTop = (-((data.height / 2) + rad)) + 'px'
  iCropShow.style.marginLeft = (-((data.width / 2) + rad)) + 'px'
  iCropShow.style.background = 'rgba(0, 0, 0, 0.0)'
  iCropShow.style.border = rad + 'px solid rgba(0, 0, 0, 0.79)'
  if (data.circle) {
    iCropShow.style.borderRadius = '50%'
  }
  iCropShow.style.zIndex = data.zIndex

  var overlay = document.createElement('div')
  overlay.style.position = 'absolute'
  overlay.style.top = '0px'
  overlay.style.left = '0px'
  overlay.style.right = '0px'
  overlay.style.bottom = '0px'
  overlay.style.background = 'transparent'
  overlay.style.zIndex = data.zIndex + 1

  var menubar = document.createElement('div')
  menubar.style.position = 'absolute'
  menubar.style.right = '5px'
  menubar.style.bottom = '14px'
  menubar.style.zIndex = data.zIndex + 2 + ''
  menubar.style.fontFamily = 'Arial'
  menubar.style.fontSize = '16px'
  menubar.style.color = '#ffffff'
  menubar.style.textAlign = 'right'

  var submit = document.createElement('span')
  submit.style.position = 'relative'
  submit.style.padding = '9px'
  submit.style.borderRadius = '2px'
  submit.style.marginRight = '5px'
  submit.innerHTML = icons.checkmark
  submit.style.cursor = 'pointer'
  submit.style.fill = '#ffffff'
  submit.addEventListener('click', events.submit)

  var cancel = document.createElement('span')
  cancel.style.position = 'relative'
  cancel.style.padding = '9px'
  cancel.style.borderRadius = '2px'
  cancel.style.marginRight = '10px'
  cancel.innerHTML = icons.cross
  cancel.style.cursor = 'pointer'
  cancel.style.fill = '#ffffff'
  cancel.addEventListener('click', events.cancel)

  var plus = document.createElement('span')
  plus.style.position = 'relative'
  plus.style.padding = '9px'
  plus.style.borderRadius = '2px'
  plus.style.marginRight = '10px'
  plus.innerHTML = icons.zoomIn
  plus.style.cursor = 'pointer'
  plus.style.fill = '#ffffff'
  plus.addEventListener('click', events.resizePlus)
  plus.addEventListener('dblclick', events.resizePlus2x)

  var minus = document.createElement('span')
  minus.style.position = 'relative'
  minus.style.padding = '9px'
  minus.style.borderRadius = '2px'
  minus.style.marginRight = '10px'
  minus.innerHTML = icons.zoomOut
  minus.style.cursor = 'pointer'
  minus.style.fill = '#ffffff'
  minus.addEventListener('click', events.resizeMinus)
  minus.addEventListener('dblclick', events.resizeMinus2x)

  menubar.appendChild(plus)
  menubar.appendChild(minus)
  menubar.appendChild(cancel)
  menubar.appendChild(submit)

  var img = document.createElement('img')
  img.setAttribute('draggable', 'false')
  img.setAttribute('src', data.dataUrl)
  img.style.position = 'absolute'
  /*img.style.height = data.ih + 'px'
  img.style.width = data.iw + 'px'*/
  img.style.height = data.nh + 'px'
  img.style.width = data.nw + 'px'
  img.style.top = data.ct + 'px'
  img.style.left = data.cl + 'px'
  img.style.padding = '0'
  img.style.margin = '0'
  img.style.border = '0px solid #ff0000'
  img.style.maxWidth = 'none'
  img.style.zIndex = data.zIndex - 1 + ''

  var size = document.createElement('div')
  // size.id = 'bauhausCropImageHolder'
  size.style.position = 'absolute'
  size.style.top = '50%'
  size.style.left = '50%'
  size.style.margin = '0'
  size.style.marginLeft = (0 - (data.width / 2)) + 'px'
  size.style.marginTop = (0 - (data.height / 2)) + 'px'
  size.style.height = data.height + 'px'
  size.style.width = data.width + 'px'
  size.style.border = '0px solid #ff0000'
  size.style.zIndex = data.zIndex - 1 + ''
  size.style.padding = '0'
  size.appendChild(img)
  //size.innerHTML = '<img draggable="false" id="bauhausCropImage" src="' + data.dataUrl + '" style="z-index:' + (data.zIndex - 1) + '; position: absolute; width: ' + data.iw + 'px; height: ' + data.ih + 'px; left: ' + data.cl + 'px; top: ' + data.ct + 'px; padding: 0; margin:0; border: 0px solid black; max-width: none;" />';

  data.cropImage = img
  data.cropImageHolder = size

  div.style.background = 'rgba(255, 0, 0, 0)'
  div.addEventListener('mousedown', events.drag)
  div.addEventListener('mouseup', events.drop)
  div.addEventListener('mousemove', events.move)
  div.addEventListener('mousewheel', events.scroll)
  div.addEventListener('wheel', events.scroll)
  div.addEventListener('mouseout', events.mouseout)
  div.appendChild(size)
  div.appendChild(iCropShow)
  div.appendChild(overlay)
  div.appendChild(menubar)
}
