(self["webpackChunkstrapi_backend"] = self["webpackChunkstrapi_backend"] || []).push([[2903],{

/***/ 80117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(41706);
  } else {}
  

/***/ }),

/***/ 41706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(53547),__webpack_require__(78384)):0}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=110)}({0:function(n,e,t){n.exports=t(19)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(25),o=t(26),i=t(22),a=t(27);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,e,t){"use strict";t.r(e),t.d(e,"Main",(function(){return v})),t.d(e,"SkipToContent",(function(){return _}));var r,o=t(5),i=t.n(o),a=t(4),u=t.n(a),s=t(3),c=t.n(s),f=t(1),d=t.n(f),p=t(0),l=t.n(p),m=t(2),b=t.n(m),h=["labelledBy"],y=b.a.main(r||(r=c()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),v=function(n){var e=n.labelledBy,t=u()(n,h),r=e||"main-content-title";return d.a.createElement(y,i()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};v.defaultProps={labelledBy:void 0},v.propTypes={labelledBy:l.a.string};var x,g=t(6),O=b()(g.Box)(x||(x=c()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]})),_=function(n){var e=n.children;return d.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e)};_.propTypes={children:l.a.node.isRequired}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){"use strict";var r=t(20);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e,t){var r=t(21);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){var r=t(24);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return p}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),f=t(7),d={color:!0},p=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],d="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),d}var p=t.spaces[r]||r;return"".concat(n,": ").concat(p,";")}}}})}));

/***/ }),

/***/ 16646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/LiveRegions.js
var LiveRegions = __webpack_require__(67422);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/permissions.js
var permissions = __webpack_require__(66454);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/utils/pluginId.js
var pluginId = __webpack_require__(92492);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/utils/getRequestURL.js

const getRequestURL = (endPoint) => `/${(pluginId_default())}/${endPoint}`;
/* harmony default export */ const utils_getRequestURL = (getRequestURL);

// EXTERNAL MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(36264);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/utils/index.js



;// CONCATENATED MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/pages/Settings/utils/layout.js

const layout = [
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Settings.enabled.label"),
      defaultMessage: "Settings.enabled.label"
    },
    description: {
      id: (0,getTrad/* default */.Z)("Settings.enabled.description"),
      defaultMessage: "Settings.enabled.description"
    },
    name: "enabled",
    type: "bool",
    size: {
      col: 6,
      xs: 6
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Settings.createUser.label"),
      defaultMessage: "Settings.createUser.label"
    },
    description: {
      id: (0,getTrad/* default */.Z)("Settings.createUser.description"),
      defaultMessage: "Settings.createUser.description"
    },
    name: "createUserIfNotExists",
    type: "bool",
    size: {
      col: 6,
      xs: 6
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Settings.token_length.label"),
      defaultMessage: "Settings.token_length.label"
    },
    description: {
      id: (0,getTrad/* default */.Z)("Settings.token_length.description"),
      defaultMessage: "Settings.token_length.description"
    },
    name: "token_length",
    type: "number",
    defaultValue: 20,
    size: {
      col: 6,
      xs: 6
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Settings.expire_period.label"),
      defaultMessage: "Settings.expire_period.label"
    },
    description: {
      id: (0,getTrad/* default */.Z)("Settings.expire_period.description"),
      defaultMessage: "Settings.expire_period.description"
    },
    name: "expire_period",
    type: "number",
    size: {
      col: 6,
      xs: 6
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Settings.confirmationUrl.label"),
      defaultMessage: "Settings.confirmationUrl.label"
    },
    description: {
      id: (0,getTrad/* default */.Z)("Settings.confirmationUrl.description"),
      defaultMessage: "Settings.confirmationUrl.description"
    },
    name: "confirmationUrl",
    type: "text",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Email.options.from.name.label"),
      defaultMessage: "Email.options.from.name.label"
    },
    placeholder: {
      id: (0,getTrad/* default */.Z)("Email.options.from.name.placeholder"),
      defaultMessage: "Email.options.from.name.placeholder"
    },
    name: "from_name",
    type: "text",
    size: {
      col: 6,
      xs: 6
    },
    validations: {
      required: true
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Email.options.from.email.label"),
      defaultMessage: "Email.options.from.email.label"
    },
    placeholder: {
      id: (0,getTrad/* default */.Z)("Email.options.from.email.placeholder"),
      defaultMessage: "Email.options.from.email.placeholder"
    },
    name: "from_email",
    type: "email",
    size: {
      col: 6,
      xs: 6
    },
    validations: {
      required: true
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Email.options.response_email.label"),
      defaultMessage: "Email.options.response_email.label"
    },
    placeholder: {
      id: (0,getTrad/* default */.Z)("Email.options.response_email.placeholder"),
      defaultMessage: "Email.options.response_email.placeholder"
    },
    name: "response_email",
    type: "email",
    size: {
      col: 12,
      xs: 12
    },
    validations: {
      required: true
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Email.options.object.label"),
      defaultMessage: "Email.options.object.label"
    },
    placeholder: {
      id: (0,getTrad/* default */.Z)("Email.options.object.placeholder"),
      defaultMessage: "Email.options.object.placeholder"
    },
    name: "object",
    type: "text",
    size: {
      col: 12,
      xs: 12
    },
    validations: {
      required: true
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Email.options.message_text.label"),
      defaultMessage: "Email.options.object.label"
    },
    name: "message_text",
    type: "textarea",
    size: {
      col: 6,
      row: 7,
      xs: 6
    },
    validations: {
      required: true
    }
  },
  {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("Email.options.message_html.label"),
      defaultMessage: "Email.options.message_html.label"
    },
    name: "message_html",
    type: "textarea",
    size: {
      col: 6,
      row: 7,
      xs: 6
    },
    validations: {
      required: true
    }
  }
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/pages/Settings/utils/schema.js

const schema = yup_lib/* object */.Ry().shape({
  token_length: yup_lib/* number */.Rx().min(5).required()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/pages/Settings/utils/api.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


const fetchData = () => __async(undefined, null, function* () {
  const { settings } = yield (0,build.request)(utils_getRequestURL("settings"), { method: "GET" });
  return settings;
});
const saveSettings = (body) => {
  return (0,build.request)(utils_getRequestURL("settings"), { method: "PUT", body });
};


;// CONCATENATED MODULE: ./node_modules/strapi-plugin-passwordless/admin/src/pages/Settings/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var Settings_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



















const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
  permissions: permissions/* default.readSettings */.Z.readSettings
}, /* @__PURE__ */ react.createElement(SettingsPage, null));
const SettingsPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  const queryClient = (0,lib.useQueryClient)();
  (0,build.useFocusWhenNavigate)();
  const updatePermissions = (0,react.useMemo)(() => ({ update: permissions/* default.updateSettings */.Z.updateSettings }), []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,build.useRBAC)(updatePermissions);
  const { status: isLoadingData, data } = (0,lib.useQuery)("advanced", () => fetchData(), {
    onSuccess: () => {
      notifyStatus(formatMessage({
        id: (0,getTrad/* default */.Z)("Form.advancedSettings.data.loaded"),
        defaultMessage: "The settings data has been loaded"
      }));
    },
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: (0,getTrad/* default */.Z)("notification.error"), defaultMessage: "An error occurred" }
      });
    }
  });
  const isLoading = isLoadingForPermissions || isLoadingData !== "success";
  const submitMutation = (0,lib.useMutation)((body) => saveSettings(body), {
    onSuccess: () => Settings_async(undefined, null, function* () {
      yield queryClient.invalidateQueries("settings");
      toggleNotification({
        type: "success",
        message: { id: (0,getTrad/* default */.Z)("notification.success.saved"), defaultMessage: "Saved" }
      });
      unlockApp();
    }),
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: (0,getTrad/* default */.Z)("notification.error"), defaultMessage: "An error occured" }
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = (body) => Settings_async(undefined, null, function* () {
    lockApp();
    yield submitMutation.mutateAsync(body);
  });
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main.Main, {
      "aria-busy": "true"
    }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
      name: formatMessage({
        id: (0,getTrad/* default */.Z)("Header.Settings"),
        defaultMessage: "Passwordless Plugin"
      })
    }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: formatMessage({
        id: (0,getTrad/* default */.Z)("Header.Settings"),
        defaultMessage: "Passwordless Plugin"
      })
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isSubmittingForm
  }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: formatMessage({
      id: (0,getTrad/* default */.Z)("Form.title.Settings"),
      defaultMessage: "Configuration"
    })
  }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    id: "title",
    title: formatMessage({
      id: (0,getTrad/* default */.Z)("Form.title.Settings"),
      defaultMessage: "Configuration"
    }),
    subtitle: formatMessage({
      id: (0,getTrad/* default */.Z)("Settings.enabled.description"),
      defaultMessage: "Enables a secure and seamless emailed link authentication."
    })
  }), /* @__PURE__ */ react.createElement(dist.Formik, {
    onSubmit: handleSubmit,
    initialValues: data,
    validateOnChange: false,
    validationSchema: utils_schema,
    enableReinitialize: true
  }, ({ errors, values, handleChange, isSubmitting }) => {
    return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: formatMessage({
        id: (0,getTrad/* default */.Z)("Form.title.Settings"),
        defaultMessage: "Passwordless Settings"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
        loading: isSubmitting,
        type: "submit",
        disabled: !canUpdate,
        startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
        size: "L"
      }, formatMessage({ id: (0,getTrad/* default */.Z)("Form.save"), defaultMessage: "Save" }))
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Box.Box, {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    }, /* @__PURE__ */ react.createElement(Stack.Stack, {
      size: 4
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "delta",
      as: "h2"
    }, formatMessage({
      id: (0,getTrad/* default */.Z)("Form.title.advancedSettings"),
      defaultMessage: "Settings"
    })), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 6
    }, utils_layout.map((input) => {
      let value = values[input.name];
      if (!value) {
        value = input.type === "bool" ? false : "";
      }
      return /* @__PURE__ */ react.createElement(Grid.GridItem, __spreadValues({
        key: input.name
      }, input.size), /* @__PURE__ */ react.createElement(build.GenericInput, __spreadProps(__spreadValues({}, input), {
        value,
        error: errors[input.name],
        disabled: input.name === "email_confirmation_redirection" && values.email_confirmation === false,
        onChange: handleChange
      })));
    }))))));
  }));
};
/* harmony default export */ const Settings = (ProtectedSettingsPage);


/***/ })

}]);