function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modals-info-info-module~pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/info/info.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/info/info.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsInfoInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n \n  <div class=\"content\">\n\n      <div class=\"box-contet\">\n          <a (click)=\"salirModal()\" class=\"btn-exit\"></a>\n          <div class=\"logo-leyent\"></div> \n          <div class=\"box-info\">\n            <table>\n                  <tr>\n                    <td>Aquesta es una aplicació pels clients de Social Partners. \n                      Contacta amb nosaltres:</td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/market.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr>\n                  <tr>\n                    <td>Passeig Verdaguer 171,\n                      Igualada 08700\n                      Barcelona</td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/tel.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"tel:+34938050537\"> +34 93 805 05 37</a></td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/email2.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"mailto:info@socialpartners.org\">info@socialpartners.org</a></td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/globe.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr> \n                  <tr>\n                    <td><a href=\"https://www.socialpartners.org\">www.socialpartners.org</a></td>\n                  </tr>\n            </table>\n            \n\n          </div>\n          \n      </div> \n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modals/info/info-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/modals/info/info-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: InfoPageRoutingModule */

  /***/
  function srcAppModalsInfoInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function () {
      return InfoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./info.page */
    "./src/app/modals/info/info.page.ts");

    var routes = [{
      path: '',
      component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }];

    var InfoPageRoutingModule = function InfoPageRoutingModule() {
      _classCallCheck(this, InfoPageRoutingModule);
    };

    InfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/info/info.module.ts":
  /*!********************************************!*\
    !*** ./src/app/modals/info/info.module.ts ***!
    \********************************************/

  /*! exports provided: InfoPageModule */

  /***/
  function srcAppModalsInfoInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPageModule", function () {
      return InfoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./info-routing.module */
    "./src/app/modals/info/info-routing.module.ts");
    /* harmony import */


    var _info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./info.page */
    "./src/app/modals/info/info.page.ts");

    var InfoPageModule = function InfoPageModule() {
      _classCallCheck(this, InfoPageModule);
    };

    InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_6__["InfoPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()],
      declarations: [_info_page__WEBPACK_IMPORTED_MODULE_7__["InfoPage"]]
    })], InfoPageModule);
    /***/
  },

  /***/
  "./src/app/modals/info/info.page.scss":
  /*!********************************************!*\
    !*** ./src/app/modals/info/info.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsInfoInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: transparent ;\n}\n\n.content {\n  background-color: rgba(207, 180, 156, 0.9);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.box-contet {\n  position: relative;\n  padding: 39px;\n  width: 100%;\n  height: 100%;\n}\n\n.btn-exit {\n  background: url('mdi_close.svg') 0 0/100% 100% no-repeat;\n  width: 24px;\n  height: 24px;\n  display: block;\n}\n\n.logo-leyent {\n  background: url('logo-leyent.svg') 0 0/100% 100% no-repeat;\n  width: 105px;\n  height: 105px;\n  display: block;\n  position: absolute;\n  top: 50px;\n  right: 30px;\n}\n\n.box-info {\n  position: absolute;\n  width: 287px;\n  right: 60px;\n  top: 180px;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n\n.box-info a {\n  color: #000000;\n  text-decoration: none;\n}\n\n.icon-ok {\n  background: url('ok.svg') 0 0/100% 100% no-repeat;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  left: 62px;\n  top: 371px;\n  display: block;\n}\n\n.box-input {\n  position: absolute;\n  width: 282.46px;\n  height: 70px;\n  left: 62.9px;\n  bottom: 226px;\n}\n\n.box-input .input-color {\n  padding: 10px;\n  border: 0px;\n  width: 100%;\n  border-bottom: 2px solid var(--color-naranja);\n  color: var(--color-naranja);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2luZm8vQzpcXGlvbmljXFxzb2NpYWwvc3JjXFxhcHBcXG1vZGFsc1xcaW5mb1xcaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9pbmZvL2luZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHdEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSwwREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FESUE7RUFDSSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjA3LCAxODAsIDE1NiwgMC45KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIC8vICNEQ0JGQTdcclxufSBcclxuXHJcbi5ib3gtY29udGV0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMzlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLWV4aXR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWRpX2Nsb3NlLnN2ZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ28tbGV5ZW50e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tbGV5ZW50LnN2ZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5ib3gtaW5mb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyODdweDtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDsgICBcclxufVxyXG5cclxuLmJveC1pbmZvIGEge1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gXHJcblxyXG4uaWNvbi1va3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vay5zdmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxlZnQ6IDYycHg7XHJcbiAgICB0b3A6IDM3MXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ib3gtaW5wdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjgyLjQ2cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBsZWZ0OiA2Mi45cHg7XHJcbiAgICBib3R0b206IDIyNnB4O1xyXG59IFxyXG5cclxuLmJveC1pbnB1dCAuaW5wdXQtY29sb3J7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1uYXJhbmphKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1uYXJhbmphKTtcclxufSBcclxuXHJcbiAgICIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCA7XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDE4MCwgMTU2LCAwLjkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib3gtY29udGV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuLWV4aXQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21kaV9jbG9zZS5zdmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nby1sZXllbnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tbGV5ZW50LnN2Z1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDEwNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiAzMHB4O1xufVxuXG4uYm94LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyODdweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIHRvcDogMTgwcHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYm94LWluZm8gYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pY29uLW9rIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vay5zdmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbGVmdDogNjJweDtcbiAgdG9wOiAzNzFweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ib3gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyODIuNDZweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBsZWZ0OiA2Mi45cHg7XG4gIGJvdHRvbTogMjI2cHg7XG59XG5cbi5ib3gtaW5wdXQgLmlucHV0LWNvbG9yIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItbmFyYW5qYSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uYXJhbmphKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/info/info.page.ts":
  /*!******************************************!*\
    !*** ./src/app/modals/info/info.page.ts ***!
    \******************************************/

  /*! exports provided: InfoPage */

  /***/
  function srcAppModalsInfoInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoPage", function () {
      return InfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var InfoPage = /*#__PURE__*/function () {
      function InfoPage(modalCtrl) {
        _classCallCheck(this, InfoPage);

        this.modalCtrl = modalCtrl;
      }

      _createClass(InfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "salirModal",
        value: function salirModal() {
          this.modalCtrl.dismiss({
            showBoxLoing: false
          });
        }
      }]);

      return InfoPage;
    }();

    InfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/info/info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./info.page.scss */
      "./src/app/modals/info/info.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], InfoPage);
    /***/
  }
}]);
//# sourceMappingURL=default~modals-info-info-module~pages-home-home-module-es5.js.map