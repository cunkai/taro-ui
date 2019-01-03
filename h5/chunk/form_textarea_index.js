(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"259":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(62),l=_interopRequireDefault(n(63)),u=_interopRequireDefault(n(65)),c=_interopRequireDefault(n(64)),f=n(82);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=o.default.getEnv();(0,f.initTestEnv)();var p=function(e){function AtTextarea(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTextarea);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=AtTextarea.__proto__||Object.getPrototypeOf(AtTextarea)).call.apply(e,[this].concat(o))),n.handleInput=function(){var e;return(e=n.props).onChange.apply(e,arguments)},n.handleFocus=function(){var e;return(e=n.props).onFocus.apply(e,arguments)},n.handleBlur=function(){var e;return(e=n.props).onBlur.apply(e,arguments)},n.handleConfirm=function(){var e;return(e=n.props).onConfirm.apply(e,arguments)},n.handleLinechange=function(){var e;return(e=n.props).onLinechange.apply(e,arguments)},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTextarea,c.default),r(AtTextarea,[{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,r=e.value,l=e.cursorSpacing,c=e.placeholder,f=e.placeholderStyle,p=e.placeholderClass,d=e.maxLength,h=e.count,m=e.disabled,y=e.autoFocus,b=e.focus,g=e.showConfirmBar,_=e.selectionStart,v=e.selectionEnd,w=e.fixed,E=e.textOverflowForbidden,x=e.height,C=function getMaxLength(e,t){return t?e:e+500}(d,E),O=x?"height:"+o.default.pxTransform(x):"",P=(0,u.default)("at-textarea","at-textarea--"+s,{"at-textarea--error":d<r.length},n),T=(0,u.default)("placeholder",p);return a.default.createElement(i.View,{"className":P,"style":t},a.default.createElement(i.Textarea,{"className":"at-textarea__textarea","style":O,"placeholderStyle":f,"placeholderClass":T,"cursorSpacing":l,"value":r,"confirmType":"完成","maxlength":C,"maxLength":C,"placeholder":c,"disabled":m,"autoFocus":y,"focus":b,"showConfirmBar":g,"selectionStart":_,"selectionEnd":v,"fixed":w,"onInput":this.handleInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onConfirm":this.handleConfirm,"onLinechange":this.handleLinechange,"showCount":!1}),h&&a.default.createElement(i.View,{"className":"at-textarea__counter"},r.length,"/",d))}}]),AtTextarea}();p.defaultProps={"customStyle":"","className":"","value":"","cursorSpacing":100,"maxLength":200,"placeholder":"","disabled":!1,"autoFocus":!1,"focus":!1,"showConfirmBar":!1,"selectionStart":-1,"selectionEnd":-1,"count":!0,"fixed":!1,"height":"","textOverflowForbidden":!0,"onLinechange":function onLinechange(){},"onChange":function onChange(){},"onFocus":function onFocus(){},"onBlur":function onBlur(){},"onConfirm":function onConfirm(){}},p.propTypes={"customStyle":l.default.oneOfType([l.default.object,l.default.string]),"className":l.default.oneOfType([l.default.array,l.default.string]),"value":l.default.string.isRequired,"cursorSpacing":l.default.number,"maxLength":l.default.oneOfType([l.default.string,l.default.number]),"placeholderClass":l.default.string,"placeholderStyle":l.default.string,"placeholder":l.default.string,"disabled":l.default.bool,"autoFocus":l.default.bool,"focus":l.default.bool,"showConfirmBar":l.default.bool,"selectionStart":l.default.number,"selectionEnd":l.default.number,"count":l.default.bool,"textOverflowForbidden":l.default.bool,"fixed":l.default.bool,"height":l.default.string,"onLinechange":l.default.func,"onChange":l.default.func.isRequired,"onFocus":l.default.func,"onBlur":l.default.func,"onConfirm":l.default.func},t.default=p},"260":function(e,t,n){},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(2)),i=n(62),l=_interopRequireDefault(n(259)),u=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(260);var c=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":"","value4":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o.default.Component),r(Index,[{"key":"handleChange","value":function handleChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t.target.value))}},{"key":"render","value":function render(){return a.default.createElement(i.View,{"className":"page"},a.default.createElement(u.default,{"title":"Textarea 多行文本框"}),a.default.createElement(i.View,{"className":"doc-body"},a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"基础"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(l.default,{"value":this.state.value1,"onChange":this.handleChange.bind(this,"value1"),"maxLength":200,"placeholder":"你的问题是..."})))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"不显示字数"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(l.default,{"count":!1,"value":this.state.value2,"onChange":this.handleChange.bind(this,"value2"),"maxLength":200,"placeholder":"你的问题是..."})))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"文字超出仍可输入"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(l.default,{"textOverflowForbidden":!1,"value":this.state.value3,"onChange":this.handleChange.bind(this,"value3"),"maxLength":200,"placeholder":"你的问题是..."})))),a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"自定义高度"),a.default.createElement(i.View,{"className":"panel__content"},a.default.createElement(i.View,{"className":"example-item"},a.default.createElement(l.default,{"height":"300","value":this.state.value4,"onChange":this.handleChange.bind(this,"value4"),"maxLength":200,"placeholder":"你的问题是..."}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=c},"62":function(e,t,n){e.exports=n(0)(18)},"63":function(e,t,n){e.exports=n(66)()},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(1);_interopRequireDefault(a),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":o(e))){var t="";return Object.keys(e).forEach(function(n){var r=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},l=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":o(e))&&t&&"object"===(void 0===t?"undefined":o(t))?Object.assign({},e,t):i(e)+i(t)}}]),AtComponent}();l.options={"addGlobalClass":!0},t.default=l},"65":function(e,t,n){e.exports=n(0)(19)},"66":function(e,t,n){"use strict";var r=n(67);function emptyFunction(){}e.exports=function(){function shim(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"67":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"68":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=(_interopRequireDefault(o),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(63)),l=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(69);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,o.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(l.View,{"className":"doc-header"},a.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"69":function(e,t,n){},"82":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.initTestEnv=t.getEventDetail=t.uuid=t.delayQuerySelector=t.delay=void 0;var r=_interopRequireDefault(n(1));_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var o=r.default.getEnv();function delay(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return new Promise(function(t){o!==r.default.ENV_TYPE.WEB?t():setTimeout(function(){t()},e)})}t.delay=delay,t.delayQuerySelector=function delayQuerySelector(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,a=o===r.default.ENV_TYPE.WEB?e:e.$scope,i=r.default.createSelectorQuery().in(a);return new Promise(function(e){delay(n).then(function(){i.select(t).boundingClientRect().exec(function(t){e(t)})})})},t.uuid=function uuid(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[],a=0;if(n=n||r.length,t)for(a=0;a<t;a++)o[a]=r[0|Math.random()*n];else for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",a=0;a<36;a++)o[a]||(e=0|16*Math.random(),o[a]=r[19==a?3&e|8:e]);return o.join("")},t.getEventDetail=function getEventDetail(e){var t=void 0;switch(o){case r.default.ENV_TYPE.WEB:t={"pageX":e.pageX,"pageY":e.pageY,"clientX":e.clientX,"clientY":e.clientY,"offsetX":e.offsetX,"offsetY":e.offsetY,"x":e.x,"y":e.y};break;case r.default.ENV_TYPE.WEAPP:t={"pageX":e.target.pageX,"pageY":e.target.pageY,"clientX":e.touches[0].clientX,"clientY":e.touches[0].clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;case r.default.ENV_TYPE.ALIPAY:t={"pageX":e.target.pageX,"pageY":e.target.pageY,"clientX":e.target.clientX,"clientY":e.target.clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;default:t={"pageX":0,"pageY":0,"clientX":0,"clientY":0,"offsetX":0,"offsetY":0,"x":0,"y":0},console.warn("getEventDetail暂未支持该环境")}return t},t.initTestEnv=function initTestEnv(){}}}]);