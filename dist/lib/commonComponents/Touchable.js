Object.defineProperty(exports,"__esModule",{value:true});exports.Touchable=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="lib/commonComponents/Touchable.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);var _underscore=require("underscore");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Touchable=function(_React$PureComponent){_inherits(Touchable,_React$PureComponent);function Touchable(props){_classCallCheck(this,Touchable);var _this=_possibleConstructorReturn(this,(Touchable.__proto__||Object.getPrototypeOf(Touchable)).call(this,props));_this.handleOnPress=(0,_underscore.debounce)(_this.props.onPress,750,true);_this.state={};return _this;}_createClass(Touchable,[{key:"render",value:function render(){var _props=this.props,children=_props.children,noOpacity=_props.noOpacity,activeOpacity=_props.activeOpacity,otherProps=_objectWithoutProperties(_props,["children","noOpacity","activeOpacity"]);return _react2.default.createElement(_reactNative.TouchableOpacity,_extends({activeOpacity:noOpacity?1:activeOpacity,onPress:this.handleOnPress},otherProps,{__source:{fileName:_jsxFileName,lineNumber:19}}),children);}}]);return Touchable;}(_react2.default.PureComponent);Touchable.propTypes={onPress:_propTypes2.default.func.isRequired,noOpacity:_propTypes2.default.bool,activeOpacity:_propTypes2.default.number};Touchable.defaultProps={noOpacity:false,activeOpacity:0.7};exports.Touchable=Touchable;
//# sourceMappingURL=Touchable.js.map