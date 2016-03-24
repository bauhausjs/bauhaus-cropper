'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (blob, options, cb) {
  var div = (0, _blackDivWrapper2.default)();
  (0, _overscrolling2.default)(true);
  (0, _loadImage2.default)(blob, function (img, dataUrl) {
    var err = (0, _data.initialData)(options, blob, img, dataUrl, cb, div);
    if (err != null) {
      return cb(err);
    }
    (0, _showCropper2.default)(div);
  });
};

var _loadImage = require('./loadImage.js');

var _loadImage2 = _interopRequireDefault(_loadImage);

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

var _overscrolling = require('./overscrolling.js');

var _overscrolling2 = _interopRequireDefault(_overscrolling);

var _blackDivWrapper = require('./blackDivWrapper.js');

var _blackDivWrapper2 = _interopRequireDefault(_blackDivWrapper);

var _showCropper = require('./showCropper.js');

var _showCropper2 = _interopRequireDefault(_showCropper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];