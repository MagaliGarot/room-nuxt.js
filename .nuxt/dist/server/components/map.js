exports.ids = [3];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.4b5db0a.png";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2f2ca9ac", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".containerText{margin:50px 40px}.textInfo{margin-top:20px;color:#20202c;font-size:1.2rem;font-family:\"Prata\",serif;font-weight:800;line-height:40px}.map{margin-top:10px}.map__title{color:#20202c;font-size:2.4rem;font-family:\"PT Serif\",serif;margin-bottom:60px;text-align:center}.map-icon{height:60px;width:auto}@media screen and (min-width:1000px){.map{margin-top:190px}.containerText{width:80%;margin-right:35%;margin-left:35%}}@media screen and (min-width:500px) and (max-width:1000px){.map{margin-top:60px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Map.vue?vue&type=template&id=d87fa4f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map"},[_vm._ssrNode("<div class=\"containerText\"><p class=\"textInfo\"> N'hésitez pas à nous contacter pour toutes information et réservations : \n        <br>"+_vm._ssrEscape("\n        ☎ "+_vm._s(_vm.item.tel)+"\n        ")+"<br>"+_vm._ssrEscape("\n        ✉ "+_vm._s(_vm.item.mail)+" \n         ")+"</p> <p class=\"textInfo\">"+_vm._ssrEscape(" "+_vm._s(_vm.item.adresse)+" ")+"</p> <p class=\"textInfo\">"+_vm._ssrEscape(" "+_vm._s(_vm.item.condition)+" ")+"</p></div> <h1 class=\"map__title\"> Map </h1> "),_vm._ssrNode("<div id=\"map-wrap\" style=\"height: 50vh\">","</div>",[_c('client-only',[_c('l-map',{attrs:{"zoom":13,"center":[48.61938213605044, -1.456640210937492]}},[_c('l-tile-layer',{attrs:{"url":"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),_vm._v(" "),_c('l-marker',{attrs:{"lat-lng":[48.61938213605044, -1.456640210937492]}},[_c('l-icon',{ref:"icon"},[_c('img',{staticClass:"map-icon",attrs:{"src":__webpack_require__(41)}})]),_vm._v(" "),_c('l-popup',[_vm._v("\n                        Mr Lumé pascal\n                        "),_c('br'),_vm._v("\n                        15 rue de montitier\n                        "),_c('br'),_vm._v("\n                        Huisnes sur mer\n                         "),_c('br'),_vm._v("\n                        50170\n                         "),_c('br'),_vm._v("\n                        PONTORSON\n                    ")])],1)],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Map.vue?vue&type=template&id=d87fa4f2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Map.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Mapvue_type_script_lang_js_ = ({
  props: ['item']
});
// CONCATENATED MODULE: ./components/Map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mapvue_type_script_lang_js_ = (Mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "08241914"
  
)

/* harmony default export */ var Map = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=map.js.map