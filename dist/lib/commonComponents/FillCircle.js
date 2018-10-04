Object.defineProperty(exports,"__esModule",{value:true});exports.FillCircle=undefined;var _jsxFileName="lib/commonComponents/FillCircle.js";var _react=require("react");var _react2=_interopRequireDefault(_react);var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require("react-native");var _commonHelpers=require("../commonHelpers");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var FillCircle=function FillCircle(props){var size=props.size,isFilled=props.isFilled,emptyColor=props.emptyColor,filledColor=props.filledColor,borderWidth=props.borderWidth;var converted={filledColor:(0,_commonHelpers.getColorFromString)(filledColor),emptyColor:(0,_commonHelpers.getColorFromString)(emptyColor)};var localStyles={containerCircle:{alignItems:"center",justifyContent:"center",width:size,height:size,borderRadius:size/2,borderWidth:borderWidth,borderColor:converted.filledColor},filledCircle:{backgroundColor:converted.filledColor,width:size*0.75,height:size*0.75,borderRadius:size*0.75/2},emptyCircle:{backgroundColor:converted.emptyColor,width:size*0.75,height:size*0.75,borderRadius:size*0.75/2}};return _react2.default.createElement(_reactNative.View,{style:[localStyles.containerCircle,props.style],__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement(_reactNative.View,{style:isFilled?localStyles.filledCircle:localStyles.emptyCircle,__source:{fileName:_jsxFileName,lineNumber:39}}));};FillCircle.propTypes={size:_propTypes2.default.number,isFilled:_propTypes2.default.bool,emptyColor:_propTypes2.default.string,filledColor:_propTypes2.default.string,borderWidth:_propTypes2.default.number,style:_propTypes2.default.oneOfType([_propTypes2.default.array,_propTypes2.default.object,_propTypes2.default.number])};FillCircle.defaultProps={size:20,isFilled:false,emptyColor:"white",filledColor:"blue",borderWidth:1,style:_commonHelpers.defaultRefs.emptyObj};exports.FillCircle=FillCircle;
//# sourceMappingURL=FillCircle.js.map