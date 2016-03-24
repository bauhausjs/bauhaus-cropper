
function loadImage(dataUrl, cb) {
  var img = new Image
  img.onload = () => {
    cb(img, dataUrl)
  }
  img.src = dataUrl
}

export default (blob, cb) => {
  if (blob instanceof (Blob) === true) {
    var fileReader = new FileReader();
    fileReader.onload = function(e) {
      var dataUrl = e.target.result
      loadImage(dataUrl, cb)
    }
    fileReader.readAsDataURL(blob);
  } else {
    loadImage(blob, cb)
  }
}
