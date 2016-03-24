
import data from './data.js'
import icons from '../icons.js'

export default function() {
  var div = document.createElement('div')
  //div.id = 'bauhausCropImageWrapper'
  var css = '-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; background: rgba(0, 0, 0, 0.79) !important; position: fixed !important; top: 0px !important; left: 0px !important; right: 0px !important; bottom: 0px !important; overflow: hidden !important; z-Index: ' + data.zIndex + ' !important'
  div.setAttribute('style', css)
  div.setAttribute('dragable', 'false')

  var indiv = document.createElement('div')
  indiv.style.position = 'absolute'
  indiv.style.top = '50%'
  indiv.style.width = '100%'
  indiv.style.textAlign = 'center'
  indiv.style.color = '#ffffff'
  indiv.style.fontFamily = 'Arial'
  indiv.style.fontSize = '18px'
  indiv.innerHTML = icons.gears

  div.appendChild(indiv)
  document.body.appendChild(div)
  return div
}
