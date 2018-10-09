Object.defineProperty(exports, "__esModule", { value: true });
exports.RMMSwitch = undefined;
const _extends =
  Object.assign ||
  function(target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
const _jsxFileName = "lib/commonComponents/CommonSwitch.js";
const _react = require("react");

const _react2 = _interopRequireDefault(_react);
const _propTypes = require("prop-types");

const _propTypes2 = _interopRequireDefault(_propTypes);
const _reactNative = require("react-native");
const _reactNativeSwitch = require("react-native-switch-web");
const _commonAssets = require("../commonAssets");
const _commonHelpers = require("../commonHelpers");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const localStyles = _reactNative.StyleSheet.create({
  greenCheck: { height: 10, width: 13 }
});
const RMMSwitch = function RMMSwitch(props) {
  const circleSize = props.barHeight * 0.9;
  const barHeight = circleSize * 1.25;
  const renderInsideCircle = function renderInsideCircle() {
    let value = props.value,
      imageResizeMode = props.imageResizeMode;
    if (value) {
      return _react2.default.createElement(_reactNative.Image, {
        source: _commonAssets.CommonIcons.greenCheck,
        style: localStyles.greenCheck,
        resizeMode: imageResizeMode,
        __source: { fileName: _jsxFileName, lineNumber: 24 }
      });
    }
    return _react2.default.createElement(_reactNative.Image, {
      style: localStyles.greenCheck,
      source: _commonAssets.CommonIcons.grayX,
      resizeMode: imageResizeMode,
      __source: { fileName: _jsxFileName, lineNumber: 33 }
    });
  };
  return _react2.default.createElement(
    _reactNativeSwitch.Switch,
    _extends({}, props, {
      circleSize,
      barHeight,
      innerCircleStyle: props.innerCircleStyle,
      renderInsideCircle,
      __source: { fileName: _jsxFileName, lineNumber: 42 }
    })
  );
};
RMMSwitch.propTypes = {
  activeText: _propTypes2.default.string,
  inActiveText: _propTypes2.default.string,
  innerCircleStyle: _reactNative.ViewPropTypes.style,
  circleActiveColor: _propTypes2.default.string,
  circleInActiveColor: _propTypes2.default.string,
  backgroundActive: _propTypes2.default.string,
  backgroundInactive: _propTypes2.default.string,
  circleBorderWidth: _propTypes2.default.number,
  barHeight: _propTypes2.default.number,
  outerCircleStyle: _reactNative.ViewPropTypes.style,
  switchLeftPx: _propTypes2.default.number,
  switchRightPx: _propTypes2.default.number,
  switchWidthMultiplier: _propTypes2.default.number,
  value: _propTypes2.default.bool.isRequired,
  imageResizeMode: _propTypes2.default.string
};
RMMSwitch.defaultProps = {
  activeText: "",
  inActiveText: "",
  innerCircleStyle: _commonAssets.CommonStyles.centerAll,
  circleActiveColor: (0, _commonHelpers.getGlobalColors)().white,
  circleInActiveColor: (0, _commonHelpers.getGlobalColors)().white,
  backgroundActive: (0, _commonHelpers.getGlobalColors)().green,
  backgroundInactive: (0, _commonHelpers.getGlobalColors)().gray,
  circleBorderWidth: 0,
  barHeight: _commonAssets.HEIGHT * 0.0385,
  outerCircleStyle: {},
  switchLeftPx: 1.3,
  switchRightPx: 1.4,
  switchWidthMultiplier: 2.75,
  imageResizeMode: "contain"
};
exports.RMMSwitch = RMMSwitch;
// # sourceMappingURL=CommonSwitch.js.map
