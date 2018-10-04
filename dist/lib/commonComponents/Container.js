Object.defineProperty(exports,"__esModule",{value:true});exports.Container=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="lib/commonComponents/Container.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require("react-native");var _commonAssets=require("../commonAssets");var _=require("./");var _commonHelpers=require("../commonHelpers");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var convertBarStyle=function convertBarStyle(prop){if(prop==="dark")return"dark-content";if(prop==="light")return"light-content";return"dark-content";};var Container=function(_React$PureComponent){_inherits(Container,_React$PureComponent);function Container(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Container);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Container.__proto__||Object.getPrototypeOf(Container)).call.apply(_ref,[this].concat(args))),_this),_this._innerRef=null,_this._getRef=function(e){_this._innerRef=e;},_this.renderStatusBar=function(){var _this$props=_this.props,renderStatus=_this$props.renderStatus,hideStatus=_this$props.hideStatus,barStyle=_this$props.barStyle;if(renderStatus){return _react2.default.createElement(_reactNative.StatusBar,{hidden:hideStatus,barStyle:convertBarStyle(barStyle),__source:{fileName:_jsxFileName,lineNumber:27}});}return null;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Container,[{key:"render",value:function render(){var _props=this.props,backgroundColor=_props.backgroundColor,fade=_props.fade,defaultSubContainer=_props.defaultSubContainer,children=_props.children,style=_props.style,onLayout=_props.onLayout;var ViewToUse=fade?_.FadeInView:_reactNative.View;var childrenToUse=defaultSubContainer?_react2.default.createElement(_reactNative.View,{style:_commonAssets.CommonStyles.defaultSubContainer,__source:{fileName:_jsxFileName,lineNumber:46}},children):children;var styleProp=backgroundColor?[_commonAssets.CommonStyles.fullContainer,(0,_commonHelpers.getBackgroundColor)(backgroundColor),style]:[_commonAssets.CommonStyles.fullContainer,(0,_commonHelpers.getBackgroundColor)(backgroundColor),style];return _react2.default.createElement(ViewToUse,_extends({ref:this._getRef},this.props,{style:styleProp,onLayout:onLayout,__source:{fileName:_jsxFileName,lineNumber:59}}),this.renderStatusBar(),childrenToUse);}}]);return Container;}(_react2.default.PureComponent);Container.propTypes=_extends({style:_propTypes2.default.oneOfType([_propTypes2.default.array,_propTypes2.default.object,_propTypes2.default.number]),barStyle:_propTypes2.default.string,hideStatus:_propTypes2.default.bool,fade:_propTypes2.default.bool,defaultSubContainer:_propTypes2.default.bool,renderStatus:_propTypes2.default.bool,onLayout:_propTypes2.default.func,backgroundColor:_propTypes2.default.string},_reactNative.ViewPropTypes);Container.defaultProps={style:_commonHelpers.defaultRefs.emptyObj,barStyle:_commonAssets.IOS?"dark":"light",hideStatus:false,fade:false,defaultSubContainer:false,renderStatus:false,onLayout:_commonHelpers.defaultRefs.nullFunc,backgroundColor:""};exports.Container=Container;
//# sourceMappingURL=Container.js.map