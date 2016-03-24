
import loadImage from './loadImage.js'
import { initialData } from './data.js'
import overscrolling from './overscrolling.js'
import blackDivWrapper from './blackDivWrapper.js'
import showCropper from './showCropper.js'
import data from './data.js'

export default function (blob, options, cb) {
  var div = blackDivWrapper()
  overscrolling(true)
  loadImage(blob, (img, dataUrl) => {
    let err = initialData(options, blob, img, dataUrl, cb, div)
    if (err != null) {
      return cb(err)
    }
    showCropper(div)
  })
}
