(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 52));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 53));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

app.$mount();

/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/guessingidioms/guessingidioms', function () {return Vue.extend(__webpack_require__(/*! pages/guessingidioms/guessingidioms.vue?mpType=page */ 9).default);});
__definePage('pages/gobang/gobang', function () {return Vue.extend(__webpack_require__(/*! pages/gobang/gobang.vue?mpType=page */ 15).default);});
__definePage('pages/puzzle/puzzle', function () {return Vue.extend(__webpack_require__(/*! pages/puzzle/puzzle.vue?mpType=page */ 20).default);});
__definePage('pages/whac-A-Mole/whac-A-Mole', function () {return Vue.extend(__webpack_require__(/*! pages/whac-A-Mole/whac-A-Mole.vue?mpType=page */ 25).default);});
__definePage('pages/NumberCut/NumberCut', function () {return Vue.extend(__webpack_require__(/*! pages/NumberCut/NumberCut.vue?mpType=page */ 30).default);});
__definePage('pages/mine/mine', function () {return Vue.extend(__webpack_require__(/*! pages/mine/mine.vue?mpType=page */ 36).default);});

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/index/index.vue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!*********************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } },
        [
          _c("image", {
            staticClass: _vm._$s(2, "sc", "logo"),
            attrs: {
              src: _vm._$s(2, "a-src", __webpack_require__(/*! ../../static/logo.png */ 5)),
              _i: 2
            }
          })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "gameView"), attrs: { _i: 3 } },
        _vm._l(_vm._$s(4, "f", { forItems: _vm.gamesList }), function(
          game,
          i,
          $20,
          $30
        ) {
          return _c(
            "view",
            {
              key: _vm._$s(4, "f", { forIndex: $20, key: "game-" + i }),
              attrs: { _i: "4-" + $30 },
              on: {
                click: function($event) {
                  return _vm.go2(game.url)
                }
              }
            },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    "5-" + $30,
                    "a-src",
                    game.image || "../../static/logo.png"
                  ),
                  _i: "5-" + $30
                }
              }),
              _vm._v(_vm._$s("4-" + $30, "t1-0", _vm._s(game.name)))
            ]
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*********************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/static/logo.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/logo.png";

/***/ }),
/* 6 */
/*!***************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 7);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      gamesList: [
      {
        image: '../../static/idiom.png',
        url: '../guessingidioms/guessingidioms',
        name: '看图猜成语' },

      {
        image: '../../static/chess.png',
        url: '../gobang/gobang',
        name: '双人五子棋' },

      {
        image: '../../static/mine.png',
        url: '../mine/mine',
        name: '扫雷' },

      {
        image: '../../static/puzzle.png',
        url: '../puzzle/puzzle',
        name: '九宫格拼图' },

      {
        image: '../../static/mouse.png',
        url: '../whac-A-Mole/whac-A-Mole',
        name: '打地鼠' },

      {
        image: '../../static/numcut.png',
        url: '../NumberCut/NumberCut',
        name: '拆数专家' }] };



  },
  onLoad: function onLoad() {

  },
  methods: {
    go2: function go2(page) {
      uni.navigateTo({
        url: page });

    } } };exports.default = _default;

/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!*********************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/guessingidioms/guessingidioms.vue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guessingidioms.vue?vue&type=template&id=4b8fb6d6&mpType=page */ 10);
/* harmony import */ var _guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guessingidioms.vue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/guessingidioms/guessingidioms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!***************************************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/guessingidioms/guessingidioms.vue?vue&type=template&id=4b8fb6d6&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./guessingidioms.vue?vue&type=template&id=4b8fb6d6&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_template_id_4b8fb6d6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/guessingidioms/guessingidioms.vue?vue&type=template&id=4b8fb6d6&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("image", { attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "flex_col"), attrs: { _i: 2 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "content_box"), attrs: { _i: 3 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    4,
                    "sc",
                    "flex_col flex_space top_label"
                  ),
                  attrs: { _i: 4 }
                },
                [
                  _c("view", [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.title)))]),
                  _c("view", [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.gold)))]),
                  _c("view", [
                    _vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.passIndex + 1)))
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(8, "sc", "img_box"), attrs: { _i: 8 } },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(9, "a-src", _vm.list[_vm.passIndex][0]),
                      _i: 9
                    }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(10, "sc", "btn flex_col flex_space"),
                      attrs: { _i: 10 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(11, "sc", "b1"),
                        attrs: { _i: 11 },
                        on: { click: _vm.useHelp }
                      })
                    ]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    12,
                    "sc",
                    "flex_col flex_space selected_box"
                  ),
                  attrs: { _i: 12 }
                },
                [
                  _vm._l(_vm._$s(13, "f", { forItems: _vm.selected }), function(
                    item,
                    index,
                    $20,
                    $30
                  ) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(13, "f", { forIndex: $20, key: index }),
                        staticClass: _vm._$s("13-" + $30, "sc", "item"),
                        attrs: {
                          "data-index": _vm._$s(
                            "13-" + $30,
                            "a-data-index",
                            index
                          ),
                          _i: "13-" + $30
                        },
                        on: { click: _vm.cancelPicker }
                      },
                      [_vm._v(_vm._$s("13-" + $30, "t0-0", _vm._s(item.txt)))]
                    )
                  }),
                  _c("view", {
                    staticClass: _vm._$s(14, "sc", "reset"),
                    attrs: { _i: 14 },
                    on: { click: _vm.resetPicker }
                  })
                ],
                2
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    15,
                    "sc",
                    "select_box flex_col flex_wrap"
                  ),
                  attrs: { _i: 15 }
                },
                _vm._l(_vm._$s(16, "f", { forItems: _vm.selectList }), function(
                  item,
                  index,
                  $21,
                  $31
                ) {
                  return _c(
                    "view",
                    { key: _vm._$s(16, "f", { forIndex: $21, key: index }) },
                    [
                      _c(
                        "view",
                        {
                          attrs: {
                            "data-index": _vm._$s(
                              "17-" + $31,
                              "a-data-index",
                              index
                            ),
                            _i: "17-" + $31
                          },
                          on: { click: _vm.picker }
                        },
                        [_vm._v(_vm._$s("17-" + $31, "t0-0", _vm._s(item)))]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!*********************************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/guessingidioms/guessingidioms.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./guessingidioms.vue?vue&type=script&lang=js&mpType=page */ 13);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_guessingidioms_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/guessingidioms/guessingidioms.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























var _data = _interopRequireDefault(__webpack_require__(/*! ./data.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { list: _data.default.dataList, passIndex: 0, gold: 100, selected: [{}, {}, {}, {}], selectList: [] };}, onLoad: function onLoad() {this.setPassInfo();}, computed: { title: function title() {if (this.passIndex < 1) {return '童生';}if (this.passIndex < 2) {return '秀才';}if (this.passIndex < 3) {return '举人';}if (this.passIndex < 4) {return '贡士';}if (this.passIndex < 5) {return '进士';}
      if (this.passIndex < 10) {
        return '探花';
      }
      if (this.passIndex < 20) {
        return '榜眼';
      }
      return '状元';
    } },

  methods: {
    /* 设置关卡信息 */
    setPassInfo: function setPassInfo() {
      /* 初始化默认已选择列表 */
      var selectedArr = [];
      for (var i = 0; i < 4; i++) {
        selectedArr.push({
          txt: '',
          index: -1 });

      }

      var info = this.list[this.passIndex][1];
      info = info.split("").sort(function () {
        /* 随机打乱 */
        return Math.random() > .5 ? -1 : 1;
      });

      this.selected = selectedArr;
      this.selectList = info;
    },
    /* 下一关 */
    nextPass: function nextPass() {
      if (this.list.length - 1 <= this.passIndex) {
        uni.showToast({
          title: '恭喜已通关',
          icon: 'success',
          duration: 2000 });

      } else {
        this.passIndex++;
        this.setPassInfo();
      }
    },
    /* 选择 */
    picker: function picker(e) {var _this = this;
      var index = Number(e.currentTarget.dataset.index);
      if (this.selectList[index]) {
        for (var i = 0; i < this.selected.length; i++) {
          if (!this.selected[i].txt) {
            this.$set(this.selected, i, {
              txt: this.selectList[index],
              index: index });

            this.$set(this.selectList, index, '');
            this.$nextTick(function () {
              _this.verify();
            });
            break;
          }
        }
      }
    },
    /* 答案校验 */
    verify: function verify() {var _this2 = this;
      if (this.findIndex() < 0) {
        var data = this.list[this.passIndex];
        this.gold += 5;
        uni.showModal({
          title: data[2],
          content: "[\u91CA\u4E49]:".concat(data[3]),
          showCancel: false,
          confirmText: "下一关",
          success: function success() {
            _this2.nextPass();
          } });

      }
    },
    /* 查找错误位置 */
    findIndex: function findIndex() {
      var result = this.list[this.passIndex][2];
      var index = -1;
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i].txt != result.charAt(i)) {
          index = i;
          break;
        }
      }
      return index;
    },
    /* 重新选择 */
    resetPicker: function resetPicker() {var _this3 = this;
      var selectedArr = [];
      this.selected.forEach(function (item, index) {
        if (item.index >= 0) {
          _this3.$set(_this3.selectList, item.index, item.txt);
        }
        selectedArr.push({
          txt: '',
          index: -1 });

      });
      this.selected = selectedArr;
    },
    /* 取消选择 */
    cancelPicker: function cancelPicker(e) {
      var index = Number(e.currentTarget.dataset.index);
      if (this.selected[index].index < 0) {
        return;
      }
      this.$set(this.selectList, this.selected[index].index, this.selected[index].txt);
      this.$set(this.selected, index, {
        txt: "",
        index: -1 });

    },
    /* 使用帮助 */
    useHelp: function useHelp() {var _this4 = this;
      if (this.gold < 10) {
        uni.showToast({
          title: '金币不足',
          icon: 'none',
          duration: 2000 });

        return;
      }
      /* 当前错误项 */
      var errIndex = this.findIndex();
      /* 正确项位置 */
      var selectIndex = this.selectList.findIndex(function (item, index) {
        if (item == _this4.list[_this4.passIndex][2].charAt(errIndex)) {
          return index;
        }
      });
      /* 当前错误项上已经存在已选值，则将已选值放回选择列表中 */
      if (this.selected[errIndex].index >= 0) {
        this.$set(this.selectList, this.selected[errIndex].index, this.selected[errIndex].txt);
      }
      this.$set(this.selected, errIndex, {
        txt: this.selectList[selectIndex],
        index: selectIndex });

      this.$set(this.selectList, selectIndex, '');
      this.$nextTick(function () {
        _this4.gold -= 10;
        _this4.verify();
      });
    } } };exports.default = _default;

/***/ }),
/* 14 */
/*!**********************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/guessingidioms/data.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var dataList = [
['/static/images1/008.jpg', '一见钟情射箭爱字中穿赞脸河浪创', '一见钟情', '喻男女双方第一次见面便互相喜爱。'],
['/static/images1/001.jpg', '一刀两断文字书写墨水难行原创作', '一刀两断', '比喻断绝关系。形容行事干脆爽快。'],
['/static/images1/002.jpg', '一日千里走路行步阳山示炸品分享', '一日千里', '形容良马跑得很快。比喻进步神速或事业发展得很快。'],
['/static/images1/004.jpg', '一目了然眼睛看视文字平洗转载好', '一目了然', '看一眼就完全清楚明白。'],
['/static/images1/010.jpg', '一刻千金头转向嚣浮轻巧鹰欢迎用', '一刻千金', '一刻时光，价值千金。形容时间非常宝贵。']];var _default =

{
  dataList: dataList };exports.default = _default;

/***/ }),
/* 15 */
/*!*****************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/gobang/gobang.vue?mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gobang.vue?vue&type=template&id=b93603d4&mpType=page */ 16);
/* harmony import */ var _gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gobang.vue?vue&type=script&lang=js&mpType=page */ 18);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/gobang/gobang.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/*!***********************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/gobang/gobang.vue?vue&type=template&id=b93603d4&mpType=page ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./gobang.vue?vue&type=template&id=b93603d4&mpType=page */ 17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_template_id_b93603d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 17 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/gobang/gobang.vue?vue&type=template&id=b93603d4&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "checkerboard"), attrs: { _i: 1 } },
        _vm._l(_vm._$s(2, "f", { forItems: _vm.pieceList }), function(
          y,
          yIndex,
          $20,
          $30
        ) {
          return _c(
            "view",
            {
              key: _vm._$s(2, "f", { forIndex: $20, key: yIndex }),
              staticClass: _vm._$s("2-" + $30, "sc", "y"),
              attrs: { _i: "2-" + $30 }
            },
            _vm._l(_vm._$s(3 + "-" + $30, "f", { forItems: y }), function(
              x,
              xIndex,
              $21,
              $31
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(3 + "-" + $30, "f", {
                    forIndex: $21,
                    key: xIndex
                  }),
                  staticClass: _vm._$s("3-" + $30 + "-" + $31, "sc", "x"),
                  attrs: { _i: "3-" + $30 + "-" + $31 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(
                      "4-" + $30 + "-" + $31,
                      "sc",
                      "x-line"
                    ),
                    class: _vm._$s(
                      "4-" + $30 + "-" + $31,
                      "c",
                      (xIndex == 0 ? "left-line " : "") +
                        (xIndex == 14 ? "right-line" : "")
                    ),
                    attrs: { _i: "4-" + $30 + "-" + $31 }
                  }),
                  _c("view", {
                    staticClass: _vm._$s(
                      "5-" + $30 + "-" + $31,
                      "sc",
                      "y-line"
                    ),
                    class: _vm._$s(
                      "5-" + $30 + "-" + $31,
                      "c",
                      (yIndex == 0 ? "top-line " : "") +
                        (yIndex == 14 ? "bottom-line" : "")
                    ),
                    attrs: { _i: "5-" + $30 + "-" + $31 }
                  }),
                  _c("view", {
                    staticClass: _vm._$s("6-" + $30 + "-" + $31, "sc", "piece"),
                    class: _vm._$s(
                      "6-" + $30 + "-" + $31,
                      "c",
                      x.pieceStatus == 1
                        ? "white"
                        : x.pieceStatus == 2
                        ? "black"
                        : ""
                    ),
                    attrs: { _i: "6-" + $30 + "-" + $31 },
                    on: {
                      click: function($event) {
                        return _vm.setPiece(xIndex, yIndex)
                      }
                    }
                  })
                ]
              )
            }),
            0
          )
        }),
        0
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "menu-box"), attrs: { _i: 7 } },
        [
          _c("view", {
            staticClass: _vm._$s(8, "sc", "btn"),
            attrs: { _i: 8 },
            on: {
              click: function($event) {
                return _vm.initCheckerboard()
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(9, "sc", "btn"),
            attrs: { _i: 9 },
            on: {
              click: function($event) {
                return _vm.lastStep()
              }
            }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 18 */
/*!*****************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/gobang/gobang.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./gobang.vue?vue&type=script&lang=js&mpType=page */ 19);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gobang_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/gobang/gobang.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      //总步数
      step: 1,
      //二维数组，对应棋盘的落子状态，要么黑子（2），要么白子（1）以及无子状态
      pieceList: [],
      //一维数组，里面存放对象，记录棋子的落子记录 y,x
      stepList: [] };

  },
  onLoad: function onLoad() {
    this.initCheckerboard();
  },
  methods: {
    // 初始化棋盘
    initCheckerboard: function initCheckerboard() {
      this.step = 1;
      this.pieceList = [];
      this.stepList = [];
      for (var i = 0; i < 15; i++) {
        var row = [];
        for (var j = 0; j < 15; j++) {
          row.push({
            pieceStatus: 0 });

        }
        this.pieceList.push(row);
      }
    },

    // 悔棋（上一步）
    lastStep: function lastStep() {
      var step = this.stepList[this.stepList.length - 1];
      // console.log("退棋",this.stepList.length)
      this.pieceList[step.y][step.x].pieceStatus = 0;
      this.step = this.stepList.length;
      this.stepList.pop();
    },

    // 落子
    setPiece: function setPiece(xIndex, yIndex) {

      // 下过的位置不能再下
      if (this.pieceList[yIndex][xIndex].pieceStatus !== 0) {
        return;
      }

      // 记录走过的路径
      this.stepList.push({
        x: xIndex,
        y: yIndex });


      // 放置棋子
      this.pieceList[yIndex][xIndex].pieceStatus = this.step % 2 + 1;
      // console.log("放棋",this.step)
      // console.log(this.pieceList)
      // 如果胜利，弹出弹窗
      if (this.checkWin(xIndex, yIndex, this.step % 2 + 1)) {
        var title = this.step % 2 ? '游戏结束，黑棋胜利' : '游戏结束，白棋胜利';
        var that = this;
        uni.showModal({
          title: title,
          success: function success(res) {
            if (res.confirm) {
              that.initCheckerboard();
            } else if (res.cancel) {

            }
          } });

      }

      this.step++;
    },

    // 判断胜利
    checkWin: function checkWin(xIndex, yIndex, status) {
      var num = 0,
      maxNum = 0;

      // 当前行最大连续数量
      for (var x = 0; x <= 14; x++) {
        var currentStatus = this.pieceList[yIndex][x].pieceStatus;
        if (currentStatus == status) {
          num++;
          if (maxNum < num) {
            maxNum = num;
          }
        } else {
          num = 0;
        }
      }
      num = 0;

      // 当前列最大连续数量
      for (var y = 0; y <= 14; y++) {
        var _currentStatus = this.pieceList[y][xIndex].pieceStatus;
        if (_currentStatus == status) {
          num++;
          if (maxNum < num) {
            maxNum = num;
          }
        } else {
          num = 0;
        }
      }
      num = 0;

      // 左上到右下方向  正：x从0 ，y到14  负:y从0 ，x到14
      for (var _x = 0, _y = yIndex - xIndex; _x <= 14; _x++, _y++) {
        if (_x < 0 || _y < 0 || _x > 14 || _y > 14) {
          continue;
        }
        var _currentStatus2 = this.pieceList[_y][_x].pieceStatus;
        // console.log("第一",x,y)
        if (_currentStatus2 == status) {
          num++;
          if (maxNum < num) {
            maxNum = num;
          }
        } else {
          num = 0;
        }
      }

      num = 0;
      // 左下到右上方向
      for (var _x2 = 0, _y2 = yIndex + xIndex; _x2 <= 14; _x2++, _y2--) {
        if (_x2 < 0 || _y2 < 0 || _x2 > 14 || _y2 > 14) {
          continue;
        }
        var _currentStatus3 = this.pieceList[_x2][_y2].pieceStatus;
        // console.log("第二",x,y)
        if (_currentStatus3 == status) {
          num++;
          if (maxNum < num) {
            maxNum = num;
          }
        } else {
          num = 0;
        }
      }

      return maxNum >= 5;
    } } };exports.default = _default;

/***/ }),
/* 20 */
/*!*****************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/puzzle/puzzle.vue?mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle.vue?vue&type=template&id=1baabf54&mpType=page */ 21);
/* harmony import */ var _puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puzzle.vue?vue&type=script&lang=js&mpType=page */ 23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/puzzle/puzzle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/*!***********************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/puzzle/puzzle.vue?vue&type=template&id=1baabf54&mpType=page ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./puzzle.vue?vue&type=template&id=1baabf54&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_template_id_1baabf54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/puzzle/puzzle.vue?vue&type=template&id=1baabf54&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      { staticClass: _vm._$s(1, "sc", "PingTu"), attrs: { _i: 1 } },
      _vm._l(_vm._$s(2, "f", { forItems: _vm.levelArray }), function(
        item,
        index,
        $20,
        $30
      ) {
        return _c("view", {
          key: _vm._$s(2, "f", { forIndex: $20, key: index }),
          staticClass: _vm._$s("2-" + $30, "sc", "item"),
          class: _vm._$s("2-" + $30, "c", item.class),
          style: _vm._$s("2-" + $30, "s", [
            _vm.itemStyle,
            { "background-image": "url(" + _vm.url + ")" }
          ]),
          attrs: {
            "data-index": _vm._$s("2-" + $30, "a-data-index", index),
            _i: "2-" + $30
          },
          on: { click: _vm.change }
        })
      }),
      0
    ),
    _c(
      "view",
      { staticClass: _vm._$s(3, "sc", "btn-group"), attrs: { _i: 3 } },
      [
        _c(
          "view",
          {
            staticClass: _vm._$s(4, "sc", "btn-green"),
            attrs: { _i: 4 },
            on: { click: _vm.start }
          },
          [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.startText)))]
        ),
        _c("view", {
          staticClass: _vm._$s(5, "sc", "btn-green"),
          attrs: { _i: 5 },
          on: { click: _vm.back }
        })
      ]
    ),
    _c("view", { staticClass: _vm._$s(6, "sc", "tip"), attrs: { _i: 6 } }, [
      _c("p", { staticClass: _vm._$s(7, "sc", "tip-first"), attrs: { _i: 7 } }),
      _c("p"),
      _c("p"),
      _c("p"),
      _c("p")
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!*****************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/puzzle/puzzle.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./puzzle.vue?vue&type=script&lang=js&mpType=page */ 24);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_puzzle_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/puzzle/puzzle.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var that;
var level = 3;var _default =
{
  props: {
    url: {
      default: 'https://images-1251347845.cos.ap-shanghai.myqcloud.com/uPic/HarmonyOS.jpg' //https://cdn.jsdelivr.net/gh/zhao-v/blog-img@master/uPic/1.jpg
    }, //这里采用自己图床存储拼图所用到的图片，以减少软件安装包的体积
    timeOut: {
      default: -1 } },


  data: function data() {
    return {
      levelArray: [],
      startText: '开始游戏',
      gameStart: false };

  },
  created: function created() {
    that = this;
    var array = {}; //创建对象
    for (var i = 1; i <= level * level; i++) {
      array[i] = {
        value: i,
        class: 'pt_item_' + i };

    }
    that.levelArray = array;
  },
  // 计算属性
  computed: {
    itemStyle: function itemStyle() {
      var res = uni.getSystemInfoSync();
      var width = parseInt(res.windowWidth * 0.33);
      return {
        width: width + 'px',
        height: width + 'px' };

    } },

  methods: {
    back: function back() {
      uni.navigateBack({
        delta: -1 });

    },
    start: function start() {
      var array = {};
      for (var i = 1; i <= level * level; i++) {
        array[i] = {
          value: i,
          class: 'pt_item_' + i };

      }
      array = that.rand(array);
      that.levelArray = array;
      // console.log(this.levelArray)
      that.gameStart = true; //将gameStart改为true,游戏开始
      that.startText = '重新开始'; //将按钮文本内容改为重新开始
    },
    //随机排序
    rand: function rand(arr) {
      var old_arr = {};
      old_arr = arr;
      // console.log(arr);
      var len = level * level;
      for (var i in arr) {//遍历arr对象
        // console.log("i= " + i)
        if (i != len) {//排除最后一个
          var indx = Math.ceil(Math.random() * (len - 1)); //控制随机数的范围以及确保为整数
          var temp = arr[indx];
          arr[indx] = arr[i];
          arr[i] = temp;
        }
      }
      // 逆序数验证 在拼图中,逆序数为偶数,才能拼图成功,奇数是不能成功的!!
      var last = 0;
      var num = 0;
      for (var _i in arr) {
        for (var j in arr) {
          if (j > _i && arr[_i].value > arr[j].value) {
            num++;
          }
        }
      }
      // console.log(num);
      if (num % 2 != 0) {
        arr = that.rand(old_arr);
      }
      return arr;
    },
    change: function change(e) {
      var ele = e.currentTarget.dataset.index; //获取数组下标
      var emptyNum = parseInt(level * level);
      // console.log(emptyNum)
      if (that.gameStart && emptyNum != that.levelArray[ele].value) {
        //点击块所对应的上面块的value
        var topNum = that.levelArray[ele - level] ? that.levelArray[ele - level].value : -1;
        //左
        var leftNum = that.levelArray[ele - 1] ? that.levelArray[ele - 1].value : -1;
        //右
        var rightNum = that.levelArray[parseInt(ele) + 1] ? that.levelArray[parseInt(ele) + 1].value : -1;
        //下
        var bottomNum = that.levelArray[parseInt(ele) + parseInt(level)] ? that.levelArray[parseInt(ele) + parseInt(level)].
        value : -1;
        var temp = {};
        // console.log(topNum, leftNum, rightNum, bottomNum);
        //移动当前选择的块
        switch (emptyNum) {//9
          case topNum:
            {
              temp = that.levelArray[ele];
              that.levelArray[ele] = that.levelArray[ele - level];
              that.levelArray[ele - level] = temp;
              break;
            }
          case leftNum:
            {
              if ((ele - 1) % 3 != 0) {
                temp = that.levelArray[ele];
                that.levelArray[ele] = that.levelArray[ele - 1];
                that.levelArray[ele - 1] = temp;
              }
              break;
            }
          case rightNum:
            {
              if (ele % 3 != 0) {
                temp = that.levelArray[ele];
                that.levelArray[ele] = that.levelArray[parseInt(ele) + 1];
                that.levelArray[parseInt(ele) + 1] = temp;
              }
              break;
            }
          case bottomNum:
            {
              temp = that.levelArray[ele];
              that.levelArray[ele] = that.levelArray[parseInt(ele) + parseInt(level)];
              that.levelArray[parseInt(ele) + parseInt(level)] = temp;
              break;
            }}


        //检查是否成功了
        if (that.isSuccess(that.levelArray)) {
          uni.showToast({
            icon: 'right',
            title: '恭喜！完成拼图' });

          that.gameStart = false;
          that.startText = '再玩一次';
          that.$emit('result', 'success');
        }
      }
    },
    isSuccess: function isSuccess(arr) {
      // console.log(arr);
      var temp = -1;
      for (var s in arr) {
        if (arr[s].value > temp) {
          temp = arr[s].value;
        } else {
          return false;
        }
      }
      return true;
    } } };exports.default = _default;

/***/ }),
/* 25 */
/*!***************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/whac-A-Mole/whac-A-Mole.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whac-A-Mole.vue?vue&type=template&id=54f4a8cc&mpType=page */ 26);
/* harmony import */ var _whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whac-A-Mole.vue?vue&type=script&lang=js&mpType=page */ 28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/whac-A-Mole/whac-A-Mole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
/*!*********************************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/whac-A-Mole/whac-A-Mole.vue?vue&type=template&id=54f4a8cc&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./whac-A-Mole.vue?vue&type=template&id=54f4a8cc&mpType=page */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_template_id_54f4a8cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 27 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/whac-A-Mole/whac-A-Mole.vue?vue&type=template&id=54f4a8cc&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "box"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "result flex_col flex_col_2"),
          attrs: { _i: 1 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "align_l"), attrs: { _i: 2 } },
            [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.time)))]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "align_r"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.countResult)))]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(4, "sc", "flex_col flex_col_3 flex_wrap"),
          attrs: { _i: 4 }
        },
        _vm._l(_vm._$s(5, "f", { forItems: _vm.list }), function(
          item,
          index,
          $20,
          $30
        ) {
          return _c(
            "view",
            {
              key: _vm._$s(5, "f", { forIndex: $20, key: index }),
              staticClass: _vm._$s("5-" + $30, "sc", "item"),
              attrs: { _i: "5-" + $30 },
              on: {
                click: function($event) {
                  return _vm.whack(index)
                }
              }
            },
            [
              _c("image", {
                staticClass: _vm._$s("6-" + $30, "sc", "hole"),
                attrs: { _i: "6-" + $30 }
              }),
              _c("image", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s("7-" + $30, "v-show", item == 1),
                    expression: "_$s((\"7-\"+$30),'v-show',item == 1)"
                  }
                ],
                staticClass: _vm._$s("7-" + $30, "sc", "mouse"),
                attrs: { _i: "7-" + $30 }
              }),
              _c("image", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s("8-" + $30, "v-show", item == 2),
                    expression: "_$s((\"8-\"+$30),'v-show',item == 2)"
                  }
                ],
                staticClass: _vm._$s("8-" + $30, "sc", "boom"),
                attrs: { _i: "8-" + $30 }
              })
            ]
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 28 */
/*!***************************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/whac-A-Mole/whac-A-Mole.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./whac-A-Mole.vue?vue&type=script&lang=js&mpType=page */ 29);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_whac_A_Mole_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/whac-A-Mole/whac-A-Mole.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //数值说明 0:无状态,1:老鼠显示,2:砸中状态
      result: 0,
      time: 30,
      flag: true };

  },
  mounted: function mounted() {
    this.showMouse();
    this.downTime();
  },
  computed: {
    // 计算结果，使用计算函数，可方便管理得分基数
    countResult: function countResult() {
      return this.result;
    } },

  onLoad: function onLoad() {
    //横竖屏切换
    plus.screen.lockOrientation('default');
  },
  onUnload: function onUnload() {
    // 页面关闭移除计时器，否则app平台有BUG
    clearTimeout(this.aTime);
    clearInterval(this.bTime);
    clearInterval(this.cTime);
    clearTimeout(this.dTime);
    //横竖屏切换
    plus.screen.lockOrientation('portrait-primary');
  },
  methods: {
    // 锤打地洞事件
    whack: function whack(i) {var _this = this;
      // 非老鼠显示状态则结束事件
      if (this.list[i] != 1) {
        return;
      }

      if (!this.flag) {
        uni.showToast({
          title: '时间已结束',
          icon: 'none' });

        return;
      }

      this.$set(this.list, i, 2);
      this.result += 100;

      // 创建匿名函数，使当前序号拥有独立作用域（减少BUG产生）
      (function (j) {
        //aTime：击打效果持续时间
        _this.aTime = setTimeout(function () {
          _this.$set(_this.list, j, 0);
        }, 800);
      })(i);
    },
    // 显示老鼠
    showMouse: function showMouse() {var _this2 = this;
      // 获取有效的洞穴,避免重复渲染
      var effective = function effective() {
        var arr = [];
        _this2.list.forEach(function (v, i) {
          // 将无状态的洞穴添加到可用数组中
          if (v == 0) {
            arr.push(i);
          }
        });
        return arr;
      };
      //bTime：老鼠出来的速度
      this.bTime = setInterval(function () {
        if (!_this2.flag) {
          return;
        }
        var effectiveArr = effective();

        // 随机获得一个可用的洞穴序号
        var r = Math.floor(Math.random() * effectiveArr.length);

        // 将可用的洞穴显示老鼠
        _this2.$set(_this2.list, effectiveArr[r], 1);

        (function (k, Arr) {
          //dTime：老鼠出洞的时长
          _this2.dTime = setTimeout(function () {
            _this2.$set(_this2.list, Arr[k], 0);
          }, 1750);
        })(r, effectiveArr);
      }, 375);

    },
    // 重新开始
    restart: function restart() {
      this.list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.result = 0;
      this.time = 30;
      this.flag = true;
    },
    // 倒计时
    downTime: function downTime() {var _this3 = this;
      //cTime:倒计时速度（正常秒速）
      this.cTime = setInterval(function () {
        if (_this3.time > 0) {
          _this3.time--;
        } else {
          if (_this3.flag) {
            _this3.flag = false;
            showPop();
          }
        }
      }, 1000);

      var showPop = function showPop() {
        uni.showModal({
          title: "游戏结束",
          content: "\u5F97\u5206\uFF1A".concat(_this3.countResult),
          cancelText: "不玩了",
          confirmText: "重新挑战",
          success: function success(e) {
            if (e.confirm) {
              _this3.restart();
            }
          } });

      };
    } } };exports.default = _default;

/***/ }),
/* 30 */
/*!***********************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/NumberCut/NumberCut.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberCut.vue?vue&type=template&id=845678ec&mpType=page */ 31);
/* harmony import */ var _NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberCut.vue?vue&type=script&lang=js&mpType=page */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/NumberCut/NumberCut.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/*!*****************************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/NumberCut/NumberCut.vue?vue&type=template&id=845678ec&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./NumberCut.vue?vue&type=template&id=845678ec&mpType=page */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_template_id_845678ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 32 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/NumberCut/NumberCut.vue?vue&type=template&id=845678ec&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: _vm._$s(1, "sc", "content"), attrs: { _i: 1 } }, [
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "drawView"), attrs: { _i: 2 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "line"), attrs: { _i: 3 } },
            _vm._l(_vm._$s(4, "f", { forItems: _vm.maskMap }), function(
              line,
              i,
              $20,
              $30
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(4, "f", { forIndex: $20, key: "collimit-" + i }),
                  style: _vm._$s("4-" + $30, "s", {
                    width: _vm.getBlockSize(),
                    height: _vm.getBlockSize()
                  }),
                  attrs: { _i: "4-" + $30 }
                },
                [_vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(i + 1)))]
              )
            }),
            0
          ),
          _vm._l(_vm._$s(5, "f", { forItems: _vm.userMap }), function(
            line,
            i,
            $21,
            $31
          ) {
            return _c(
              "view",
              {
                key: _vm._$s(5, "f", {
                  forIndex: $21,
                  key: "userMapLine-" + i
                }),
                staticClass: _vm._$s("5-" + $31, "sc", "line"),
                attrs: { _i: "5-" + $31 }
              },
              [
                _c(
                  "view",
                  {
                    style: _vm._$s("6-" + $31, "s", {
                      width: _vm.getBlockSize(),
                      height: _vm.getBlockSize()
                    }),
                    attrs: { _i: "6-" + $31 }
                  },
                  [_vm._v(_vm._$s("6-" + $31, "t0-0", _vm._s(i + 1)))]
                ),
                _vm._l(
                  _vm._$s(7 + "-" + $31, "f", { forItems: line }),
                  function(block, j, $22, $32) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(7 + "-" + $31, "f", {
                          forIndex: $22,
                          key: "block-" + i + "-" + j
                        }),
                        staticClass: _vm._$s(
                          "7-" + $31 + "-" + $32,
                          "sc",
                          "block"
                        ),
                        style: _vm._$s("7-" + $31 + "-" + $32, "s", {
                          width: _vm.getBlockSize(),
                          height: _vm.getBlockSize()
                        }),
                        attrs: { _i: "7-" + $31 + "-" + $32 },
                        on: {
                          click: function($event) {
                            return _vm.blockClick(i, j)
                          }
                        }
                      },
                      [
                        _vm._$s(
                          "8-" + $31 + "-" + $32,
                          "i",
                          _vm.userMap[i][j] == 1
                        )
                          ? _c("view", {
                              staticClass: _vm._$s(
                                "8-" + $31 + "-" + $32,
                                "sc",
                                "userMark1"
                              ),
                              attrs: { _i: "8-" + $31 + "-" + $32 }
                            })
                          : _c("view")
                      ]
                    )
                  }
                ),
                _c(
                  "view",
                  {
                    class: _vm._$s("10-" + $31, "c", {
                      textGreen: _vm.isSame(false, i)
                    }),
                    style: _vm._$s("10-" + $31, "s", {
                      width: _vm.getBlockSize(),
                      height: _vm.getBlockSize()
                    }),
                    attrs: { _i: "10-" + $31 }
                  },
                  [
                    _vm._v(
                      _vm._$s(
                        "10-" + $31,
                        "t0-0",
                        _vm._s(_vm.getMustSum(false, i))
                      )
                    )
                  ]
                )
              ],
              2
            )
          }),
          _c(
            "view",
            { staticClass: _vm._$s(11, "sc", "line"), attrs: { _i: 11 } },
            _vm._l(_vm._$s(12, "f", { forItems: _vm.maskMap }), function(
              line,
              i,
              $23,
              $33
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(12, "f", {
                    forIndex: $23,
                    key: "collimit-" + i
                  }),
                  class: _vm._$s("12-" + $33, "c", {
                    textGreen: _vm.isSame(true, i)
                  }),
                  style: _vm._$s("12-" + $33, "s", {
                    width: _vm.getBlockSize(),
                    height: _vm.getBlockSize()
                  }),
                  attrs: { _i: "12-" + $33 }
                },
                [
                  _vm._v(
                    _vm._$s(
                      "12-" + $33,
                      "t0-0",
                      _vm._s(_vm.getMustSum(true, i))
                    )
                  )
                ]
              )
            }),
            0
          )
        ],
        2
      ),
      _c(
        "view",
        { staticClass: _vm._$s(13, "sc", "content"), attrs: { _i: 13 } },
        [
          _c("view", {
            staticClass: _vm._$s(14, "sc", "title"),
            attrs: { _i: 14 }
          }),
          _c(
            "radio-group",
            { attrs: { _i: 15 }, on: { change: _vm.modeChange } },
            [
              _c(
                "radio",
                {
                  attrs: {
                    checked: _vm._$s(16, "a-checked", _vm.action == 0),
                    _i: 16
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(17, "sc", "block"),
                      style: _vm._$s(17, "s", {
                        width: _vm.getBlockSize(),
                        height: _vm.getBlockSize()
                      }),
                      attrs: { _i: 17 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(18, "sc", "userMark0"),
                        attrs: { _i: 18 }
                      })
                    ]
                  )
                ]
              ),
              _c(
                "radio",
                {
                  attrs: {
                    checked: _vm._$s(19, "a-checked", _vm.action == 1),
                    _i: 19
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(20, "sc", "block"),
                      style: _vm._$s(20, "s", {
                        width: _vm.getBlockSize(),
                        height: _vm.getBlockSize()
                      }),
                      attrs: { _i: 20 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(21, "sc", "userMark1"),
                        attrs: { _i: 21 }
                      })
                    ]
                  )
                ]
              ),
              _c(
                "radio",
                {
                  attrs: {
                    checked: _vm._$s(22, "a-checked", _vm.action == 2),
                    _i: 22
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(23, "sc", "block"),
                      style: _vm._$s(23, "s", {
                        width: _vm.getBlockSize(),
                        height: _vm.getBlockSize()
                      }),
                      attrs: { _i: 23 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(24, "sc", "userMark2"),
                        attrs: { _i: 24 }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(25, "sc", "content"), attrs: { _i: 25 } },
        [
          _c("view", {
            staticClass: _vm._$s(26, "sc", "title"),
            attrs: { _i: 26 }
          }),
          _c("view", [
            _c("b"),
            _vm._v(
              _vm._$s(27, "t1-0", _vm._s(_vm.mapSize)) +
                _vm._$s(27, "t1-1", _vm._s(_vm.mapSize))
            )
          ]),
          _c("view", [_c("b")]),
          _c("view", [_c("b")]),
          _c("view", [_c("b")]),
          _c("view", [_c("b")])
        ]
      )
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!***********************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/NumberCut/NumberCut.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./NumberCut.vue?vue&type=script&lang=js&mpType=page */ 34);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_NumberCut_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/NumberCut/NumberCut.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      //地图大小 n*n
      //初始时是简单的，地图大小是4
      mapSize: 4,
      //标记地图
      maskMap: [],
      //用户标注地图
      userMap: [],
      //难易程度选择
      action: 0 };

  },
  onLoad: function onLoad() {
    this.initMaps();
  },
  methods: {
    //初始标记地图和用户标注地图
    initMaps: function initMaps() {
      this.maskMap = [];
      this.userMap = [];
      for (var i = 0; i < this.mapSize; i++) {
        this.maskMap.push([]);
        this.userMap.push([]);
        for (var j = 0; j < this.mapSize; j++) {
          this.userMap[i].push(0);
          this.maskMap[i].push(Math.random() >= 0.5 ? 1 : 0);
        }
      }
      __f__("log", this.maskMap, " at pages/NumberCut/NumberCut.vue:90");
    },
    getBlockSize: function getBlockSize() {var multi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return multi * parseInt(700 / (this.mapSize + 4)) + 'upx';
    },
    /**
        * 获得原本的标记地图的数据
        */
    getMustSum: function getMustSum() {var isCol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var sum = 0;
      if (!isCol) {//如果是行
        for (var i = 0; i < this.mapSize; i++) {
          sum += this.maskMap[index][i] * (i + 1);
        }
      } else
      {//如果是列
        for (var i = 0; i < this.mapSize; i++) {
          sum += this.maskMap[i][index] * (i + 1);
        }
      }
      return sum;
    },
    modeChange: function modeChange(e) {
      __f__("log", e.detail.value, " at pages/NumberCut/NumberCut.vue:113");
      this.action = e.detail.value;
      if (this.action == 0) {
        this.mapSize = 4;
      } else if (this.action == 1) {
        this.mapSize = 6;
      } else {
        this.mapSize = 8;
      }
      this.initMaps();
    },
    /**
        * 获得用户的标记地图的数据
        */
    getUserSum: function getUserSum() {var isCol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var sum = 0;
      if (!isCol) {
        for (var i = 0; i < this.mapSize; i++) {
          sum += this.userMap[index][i] * (i + 1);
        }
      } else
      {
        for (var i = 0; i < this.mapSize; i++) {
          sum += this.userMap[i][index] * (i + 1);
        }
      }
      return sum;
    },
    isSame: function isSame() {var isCol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var must = this.getMustSum(isCol, index);
      var user = this.getUserSum(isCol, index);

      return must == user;
    },
    blockClick: function blockClick(i, j) {var _this = this;
      if (this.userMap[i][j] == 1)
      this.userMap[i][j] = 0;else

      this.userMap[i][j] = 1;

      this.$forceUpdate();
      //判断游戏是否完成
      var isComplete = true;
      for (var i = 0; i < this.mapSize; i++) {
        if (!this.isSame(true, i) || !this.isSame(false, i)) {
          isComplete = false;
          break;
        }
      }
      if (isComplete) {
        uni.showModal({
          //提示的标题
          title: '游戏结束',
          //提示的内容
          content: '你找到了所有的为1的地方',
          //确定按钮的文字，默认为"确定"，最多 4 个字符
          confirmText: '再来一局',
          //取消按钮的文字，默认为"取消"，最多 4 个字符
          cancelText: '返回',
          //接口调用成功的回调函数
          success: function success(res) {
            //confirm为 true 时，表示用户点击了确定按钮
            if (res.confirm) {
              _this.initMaps();
            }
            //cancel为 true 时，表示用户点击了取消
            else if (res.cancel) {
                uni.navigateBack();
              }
          } });

      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 35)["default"]))

/***/ }),
/* 35 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 36 */
/*!*************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/mine/mine.vue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mine.vue?vue&type=template&id=984eb594&mpType=page */ 37);
/* harmony import */ var _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine.vue?vue&type=script&lang=js&mpType=page */ 39);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mine/mine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/*!*******************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/mine/mine.vue?vue&type=template&id=984eb594&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mine.vue?vue&type=template&id=984eb594&mpType=page */ 38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_984eb594_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 38 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/mine/mine.vue?vue&type=template&id=984eb594&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("saolei", {
        attrs: {
          width: _vm.mapsize[_vm.levelChoose][0],
          height: _vm.mapsize[_vm.levelChoose][1],
          boomNum: _vm.boomNum[_vm.levelChoose],
          _i: 1
        },
        on: { init: _vm.gameinit }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "placeInRow"), attrs: { _i: 2 } },
        [
          _c(
            "radio-group",
            { attrs: { _i: 3 }, on: { change: _vm.changeLevel } },
            [
              _c("radio", {
                attrs: {
                  checked: _vm._$s(4, "a-checked", _vm.levelChoose == 0),
                  _i: 4
                }
              }),
              _c("radio", {
                attrs: {
                  checked: _vm._$s(5, "a-checked", _vm.levelChoose == 1),
                  _i: 5
                }
              }),
              _c("radio", {
                attrs: {
                  checked: _vm._$s(6, "a-checked", _vm.levelChoose == 2),
                  _i: 6
                }
              })
            ]
          )
        ]
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 39 */
/*!*************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/pages/mine/mine.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mine.vue?vue&type=script&lang=js&mpType=page */ 40);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/pages/mine/mine.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















var _gwhSaolei = _interopRequireDefault(__webpack_require__(/*! ../../components/gwh-saolei/gwh-saolei.vue */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { saolei: _gwhSaolei.default }, data: function data() {return { mapsize: [[8, 8], [12, 12], [16, 30]], boomNum: [10, 20, 99], levelChoose: 0 };}, onLoad: function onLoad() {},
  methods: {
    changeLevel: function changeLevel(e) {
      // console.log(e.detail.value)
      this.levelChoose = parseInt(e.detail.value);
    },
    gameinit: function gameinit(e) {
      __f__("log", e, " at pages/mine/mine.vue:41");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 35)["default"]))

/***/ }),
/* 41 */
/*!******************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/gwh-saolei.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gwh-saolei.vue?vue&type=template&id=6f530d78& */ 42);
/* harmony import */ var _gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gwh-saolei.vue?vue&type=script&lang=js& */ 50);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/gwh-saolei/gwh-saolei.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 42 */
/*!*************************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/gwh-saolei.vue?vue&type=template&id=6f530d78& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./gwh-saolei.vue?vue&type=template&id=6f530d78& */ 43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_template_id_6f530d78___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 43 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/gwh-saolei.vue?vue&type=template&id=6f530d78& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "titleLine"), attrs: { _i: 1 } },
        [
          _c("view", { attrs: { _i: 2 }, on: { click: _vm.initMap } }, [
            _vm._$s(3, "i", _vm.isGameOver)
              ? _c("image", {
                  attrs: {
                    src: _vm._$s(3, "a-src", __webpack_require__(/*! ./imgs/dead.png */ 44)),
                    _i: 3
                  }
                })
              : _vm._$s(4, "e", _vm.isGameSuccess)
              ? _c("image", {
                  attrs: {
                    src: _vm._$s(4, "a-src", __webpack_require__(/*! ./imgs/smile.png */ 45)),
                    _i: 4
                  }
                })
              : _c("image", {
                  attrs: {
                    src: _vm._$s(5, "a-src", __webpack_require__(/*! ./imgs/smile2.png */ 46)),
                    _i: 5
                  }
                })
          ]),
          _c("view", [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.getRestBoomNum())))])
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "contentMap"), attrs: { _i: 7 } },
        [
          _c(
            "view",
            _vm._l(_vm._$s(9, "f", { forItems: _vm.mask }), function(
              row,
              i,
              $20,
              $30
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(9, "f", { forIndex: $20, key: "row-" + i }),
                  staticClass: _vm._$s("9-" + $30, "sc", "placeInRow"),
                  attrs: { _i: "9-" + $30 }
                },
                _vm._l(
                  _vm._$s(10 + "-" + $30, "f", { forItems: row }),
                  function(block, j, $21, $31) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(10 + "-" + $30, "f", {
                          forIndex: $21,
                          key: "block-" + j
                        }),
                        staticClass: _vm._$s(
                          "10-" + $30 + "-" + $31,
                          "sc",
                          "content"
                        ),
                        attrs: { _i: "10-" + $30 + "-" + $31 }
                      },
                      [
                        _vm._$s("11-" + $30 + "-" + $31, "i", block === 1)
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "11-" + $30 + "-" + $31,
                                  "sc",
                                  "block"
                                ),
                                attrs: { _i: "11-" + $30 + "-" + $31 }
                              },
                              [
                                _vm._$s(
                                  "12-" + $30 + "-" + $31,
                                  "i",
                                  _vm.maps[i][j] > 0
                                )
                                  ? _c(
                                      "view",
                                      {
                                        attrs: { _i: "12-" + $30 + "-" + $31 },
                                        on: {
                                          click: function($event) {
                                            return _vm.setMask(i, j, "open")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            "12-" + $30 + "-" + $31,
                                            "t0-0",
                                            _vm._s(_vm.maps[i][j])
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._$s(
                                      "13-" + $30 + "-" + $31,
                                      "e",
                                      _vm.maps[i][j] === 0
                                    )
                                  ? _c("view")
                                  : _c("view", [
                                      _c("image", {
                                        attrs: {
                                          src: _vm._$s(
                                            "15-" + $30 + "-" + $31,
                                            "a-src",
                                            __webpack_require__(/*! ./imgs/boom.png */ 47)
                                          ),
                                          _i: "15-" + $30 + "-" + $31
                                        }
                                      })
                                    ])
                              ]
                            )
                          : _vm._$s("16-" + $30 + "-" + $31, "e", block === 0)
                          ? _c("view", {
                              staticClass: _vm._$s(
                                "16-" + $30 + "-" + $31,
                                "sc",
                                "block mask"
                              ),
                              attrs: { _i: "16-" + $30 + "-" + $31 },
                              on: {
                                longpress: function($event) {
                                  return _vm.setMask(i, j, "flag")
                                },
                                click: function($event) {
                                  return _vm.setMask(i, j, "open")
                                }
                              }
                            })
                          : _vm._$s("17-" + $30 + "-" + $31, "e", block === -1)
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "17-" + $30 + "-" + $31,
                                  "sc",
                                  "block mask"
                                ),
                                attrs: { _i: "17-" + $30 + "-" + $31 },
                                on: {
                                  longpress: function($event) {
                                    return _vm.setMask(i, j, "flag")
                                  }
                                }
                              },
                              [
                                _c("image", {
                                  attrs: {
                                    src: _vm._$s(
                                      "18-" + $30 + "-" + $31,
                                      "a-src",
                                      __webpack_require__(/*! ./imgs/flag.png */ 48)
                                    ),
                                    _i: "18-" + $30 + "-" + $31
                                  }
                                })
                              ]
                            )
                          : _vm._$s("19-" + $30 + "-" + $31, "e", block === 2)
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "19-" + $30 + "-" + $31,
                                  "sc",
                                  "block mask"
                                ),
                                attrs: { _i: "19-" + $30 + "-" + $31 }
                              },
                              [
                                _c("image", {
                                  attrs: {
                                    src: _vm._$s(
                                      "20-" + $30 + "-" + $31,
                                      "a-src",
                                      __webpack_require__(/*! ./imgs/error.png */ 49)
                                    ),
                                    _i: "20-" + $30 + "-" + $31
                                  }
                                })
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  }
                ),
                0
              )
            }),
            0
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 44 */
/*!*****************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/imgs/dead.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/gwh-saolei/imgs/dead.png";

/***/ }),
/* 45 */
/*!******************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/imgs/smile.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/gwh-saolei/imgs/smile.png";

/***/ }),
/* 46 */
/*!*******************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/imgs/smile2.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/gwh-saolei/imgs/smile2.png";

/***/ }),
/* 47 */
/*!*****************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/imgs/boom.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/gwh-saolei/imgs/boom.png";

/***/ }),
/* 48 */
/*!*****************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/imgs/flag.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/gwh-saolei/imgs/flag.png";

/***/ }),
/* 49 */
/*!******************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/imgs/error.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/gwh-saolei/imgs/error.png";

/***/ }),
/* 50 */
/*!*******************************************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/gwh-saolei.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./gwh-saolei.vue?vue&type=script&lang=js& */ 51);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gwh_saolei_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/components/gwh-saolei/gwh-saolei.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * gwh 简单扫雷
 * @description 扫雷游戏简单Demo
 * @tutorial 
 * @property {Number} width 扫雷地图宽
 * @property {Number} height 扫雷地图高
 * @property {Number} boomNum 雷个数     
 * @property {Function} @init 地图初始化监听，返回游戏地图：-1表示雷，0-9表示周围有几个雷
 * @property {Function} @result 游戏结束监听, code=0成功，其余失败
 * */var _default =
{
  props: {
    width: {
      type: Number,
      default: 8 },

    height: {
      type: Number,
      default: 8 },

    boomNum: {
      type: Number,
      default: 10 } },


  watch: {
    width: function width(newVal) {
      this.initMap();
    },
    height: function height(newVal) {
      this.initMap();
    },
    boomNum: function boomNum(newVal) {
      this.initMap();
    } },

  data: function data() {
    return {
      maps: [], //-1：自己是雷，0~8：周围雷的总数且自己不是雷，
      mask: [], //-1：方块未打开且有标记，0：方快未打开，1：方块打开状态，2：提示误标方块
      booms: [], //存储所有雷的位置信息
      isGameOver: false,
      isGameSuccess: false,
      lastAction: '' };

  },
  mounted: function mounted() {
    this.initMap();
  },
  methods: {
    getRestBoomNum: function getRestBoomNum() {
      try {
        var flagNum = 0; //被标记方块的数量
        var shownNum = 0; //被打开方块的数量
        for (var i = 0; i < this.width; i++) {
          for (var j = 0; j < this.height; j++) {
            if (this.mask[i][j] == -1) flagNum++;
            if (this.mask[i][j] == 1) shownNum++;
          }
        }
        // console.log(shownNum, this.booms.length)
        this.$nextTick(function () {
          //成功的判定条件
          if (shownNum + this.booms.length == this.width * this.height && !this.isGameSuccess) {
            this.isGameSuccess = true;
            for (var i = 0; i < this.width; i++) {
              for (var j = 0; j < this.height; j++) {
                //成功后自动帮标记剩余雷
                if (this.mask[i][j] == 0 && this.maps[i][j] == -1) this.mask[i][j] = -1;
              }
            }
            this.$forceUpdate(); //强制页面刷新
          }
        });

        return this.booms.length - flagNum; //返回剩余雷数
      } catch (e) {
        return this.boomNum;
      }
    },
    initMap: function initMap() {
      this.maps = [];
      this.mask = [];
      this.isGameOver = false;
      this.isGameSuccess = false;
      this.booms = [];
      for (var i = 0; i < this.width; i++) {//行
        this.maps.push([]);
        this.mask.push([]);
        for (var j = 0; j < this.height; j++) {//列
          this.maps[i].push(0),
          this.mask[i].push(0);
        }
      }

      //随机埋雷
      var initBooms = [];
      while (initBooms.length < this.boomNum) {
        var xy = [//随机生成雷坐标
        parseInt(Math.random() * this.width),
        parseInt(Math.random() * this.height)];

        var hasSame = false; //用于判断是否有相同的雷
        for (var b = 0; b < initBooms.length; b++) {//随机新生成的雷是否与已有的雷位置冲突，是则重新生成
          if (initBooms[b][0] == xy[0] && initBooms[b][1] == xy[1]) {
            hasSame = true;
            break;
          }
        }
        if (!hasSame) {
          initBooms.push(xy);
          this.maps[xy[0]][xy[1]] = -1;
        }
      }
      this.booms = initBooms; //存一下刚生成的雷的位置信息

      //计算周围8个方向的雷的总数
      for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
          if (this.maps[i][j] !== -1) {
            var boomSum = 0;
            if (i > 0) {
              if (j > 0 && this.maps[i - 1][j - 1] == -1)
              boomSum++; //左上
              if (this.maps[i - 1][j] == -1)
              boomSum++; //左
              if (j < this.height - 1 && this.maps[i - 1][j + 1] == -1)
              boomSum++; //左下
            }
            if (i < this.width - 1) {
              if (j > 0 && this.maps[i + 1][j - 1] == -1)
              boomSum++; //右上
              if (this.maps[i + 1][j] == -1)
              boomSum++; //右
              if (j < this.height - 1 && this.maps[i + 1][j + 1] == -1)
              boomSum++; //右下
            }
            if (j > 0 && this.maps[i][j - 1] == -1)
            boomSum++; //上
            if (j < this.height - 1 && this.maps[i][j + 1] == -1)
            boomSum++; //下
            this.maps[i][j] = boomSum;
          }
        }
      }

      this.$emit('init', {
        maps: this.maps });
      //传maps数据给父组件
    },
    setMask: function setMask(i, j, action) {
      // action 可以是 open 或 flag
      this.lastAction = action;
      if (this.isGameOver || this.isGameSuccess) {
        return;
      } else if (action === 'open') {
        if (this.maps[i][j] === -1) {
          //失败后让所有的雷显示出来
          for (var b = 0; b < this.booms.length; b++) {
            var theBoomXY = this.booms[b];
            if (this.mask[theBoomXY[0]][theBoomXY[1]] != -1) {
              this.mask[theBoomXY[0]][theBoomXY[1]] = 1;
            }
          }
          this.isGameOver = true;

          //失败后显示所有的错误标记
          for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
              if (this.mask[i][j] == -1 && this.maps[i][j] != -1) this.mask[i][j] = 2;
            }
          }
          this.$forceUpdate(); //强制页面刷新
        } else {
          this.canIOpen(i, j);
        }
      } else {//action === 'flag'
        if (this.mask[i][j] == 0)
        this.mask[i][j] = -1; //标记
        else if (this.mask[i][j] == -1)
          this.mask[i][j] = 0; //取消标记
        // console.log(i,j,this.mask[i][j])
        this.$nextTick(function () {
          this.$forceUpdate();
        });
      }
    },
    canIOpen: function canIOpen(i, j) {

      this.mask[i][j] = 1; //打开此方块

      /*
      	递归
      	点到0
      		1.显示自己
      		2.找四周
      			1.显示自己（如果四周不为0，则就显示到这里，不再查找了）
      			2.如果值为0
      				1.显示自己
      				2.找四周（如果四周不为0，则就显示到这里，不再查找了）
      					1.显示自己
      					2.找四周（如果四周不为0，则就显示到这里，不再查找了）
      						...
      */
      if (this.maps[i][j] === 0) {//点到0的话
        if (i > 0) {
          if (j > 0 && this.mask[i - 1][j - 1] == 0) //左上未被打开的话
            this.canIOpen(i - 1, j - 1);
          if (this.mask[i - 1][j] == 0) //左 
            this.canIOpen(i - 1, j);
          if (j < this.height - 1 && this.mask[i - 1][j + 1] == 0) //左下 
            this.canIOpen(i - 1, j + 1);
        }
        if (i < this.width - 1) {
          if (j > 0 && this.mask[i + 1][j - 1] == 0) //右上
            this.canIOpen(i + 1, j - 1);
          if (this.mask[i + 1][j] == 0) //右 
            this.canIOpen(i + 1, j);
          if (j < this.height - 1 && this.mask[i + 1][j + 1] == 0) //右下 
            this.canIOpen(i + 1, j + 1);
        }
        if (j > 0 && this.mask[i][j - 1] == 0) //上
          this.canIOpen(i, j - 1);
        if (j < this.height - 1 && this.mask[i][j + 1] == 0) //下
          this.canIOpen(i, j + 1);
      }

      // console.log(this.mask)
      this.$forceUpdate();
    } } };exports.default = _default;

/***/ }),
/* 52 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 53 */
/*!*************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/App.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);
var render, staticRenderFns, recyclableRender, components
var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 54 */
/*!**************************************************************************!*\
  !*** /Users/wcooper/Downloads/Steam(1)/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 55);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wcooper/Downloads/Steam(1)/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  onLaunch: function onLaunch() {
    __f__("log", 'App Launch', " at App.vue:4");
  },
  onShow: function onShow() {
    __f__("log", 'App Show', " at App.vue:7");
  },
  onHide: function onHide() {
    __f__("log", 'App Hide', " at App.vue:10");
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 35)["default"]))

/***/ })
],[[0,"app-config"]]]);