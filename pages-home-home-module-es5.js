function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n      <div class=\"logo-home\">\n          <div>{{ \"slogan\" | translate }}</div>\n      </div>\n      \n      <div class=\"box-login\" id=\"box-login\" [hidden]=hiddenLogin>\n        <div class=\"login\">\n            <input placeholder='{{ \"user\" | translate }}'  autofocus />\n            <input placeholder='{{ \"password\" | translate }}' />\n            <div class=\"box-forgot\"><a class=\"forgot\" (click)=\"openModalRemember()\">{{ \"forgot_password\" | translate }}</a></div>\n\n            <ion-button class=\"btn-plane-orange\" expand=\"full\">{{ \"entry\" | translate }}</ion-button>\n\n            <div><a class=\"accountnot\" (click)=\"openModalInfo()\">{{ \"accountnot\" | translate }}</a></div>\n\n        </div>\n      </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modals_info_info_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../modals/info/info.module */
    "./src/app/modals/info/info.module.ts");
    /* harmony import */


    var _modals_info_info_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../modals/info/info.page */
    "./src/app/modals/info/info.page.ts");
    /* harmony import */


    var _modals_remember_remember_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../modals/remember/remember.module */
    "./src/app/modals/remember/remember.module.ts");
    /* harmony import */


    var _modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../modals/remember/remember.page */
    "./src/app/modals/remember/remember.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      entryComponents: [_modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_4__["RememberPage"], _modals_info_info_page__WEBPACK_IMPORTED_MODULE_2__["InfoPage"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_11__["HomePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _modals_remember_remember_module__WEBPACK_IMPORTED_MODULE_3__["RememberPageModule"], _modals_info_info_module__WEBPACK_IMPORTED_MODULE_1__["InfoPageModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_10__["HomePage"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: url('background-home.jpg') 0 0/100% 100% no-repeat;\n  width: 100%;\n  height: 100%;\n}\n\n.logo-home {\n  position: absolute;\n  width: 206px;\n  height: 206px;\n  left: 100px;\n  top: 142px;\n  background: url('Logotipo.svg') 0 0/100% 100% no-repeat;\n  z-index: 1;\n}\n\n.logo-home div {\n  position: absolute;\n  width: 206px;\n  top: 136px;\n  color: #FFF;\n  text-align: center;\n  font-size: 12px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.box-login {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n.box-login .login {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  position: absolute;\n  width: 330px;\n  height: 218px;\n  left: calc(50% - 330px/2 - 0.36px);\n  top: calc(50% - 218px/2 + 224px);\n}\n\n.box-login .login input {\n  background: #FFF;\n  padding: 10px 20px;\n  border: none;\n  margin-top: 0px;\n  margin-bottom: 3px;\n}\n\n.box-forgot {\n  text-align: right;\n}\n\n.forgot {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  color: #FCFCFC;\n  text-align: right;\n  padding: 10px 0px;\n  display: inline-block;\n}\n\n.accountnot {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  color: #FCFCFC;\n  text-align: left;\n  padding: 10px 0px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcaW9uaWNcXHNvY2lhbC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ0FKOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1ob21lLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTsgXG59IFxuXG5cbi5sb2dvLWhvbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMDZweDtcbiAgICBoZWlnaHQ6IDIwNnB4O1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHRvcDogMTQycHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xvZ290aXBvLnN2ZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIHotaW5kZXg6IDE7XG59XG4gXG4ubG9nby1ob21lIGRpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwNnB4O1xuICAgIHRvcDogMTM2cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IFxufVxuXG4uYm94LWxvZ2lue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICB6LWluZGV4OiAwOyBcbn1cblxuLmJveC1sb2dpbiAubG9naW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogMjE4cHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzMwcHgvMiAtIDAuMzZweCk7XG4gIHRvcDogY2FsYyg1MCUgLSAyMThweC8yICsgMjI0cHgpO1xufVxuXG4uYm94LWxvZ2luIC5sb2dpbiBpbnB1dHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbn0gXG5cbi5ib3gtZm9yZ290e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb3Jnb3R7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjRkNGQ0ZDO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiBcbi5hY2NvdW50bm90e1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBjb2xvcjogI0ZDRkNGQztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCIjY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWhvbWUuanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9nby1ob21lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjA2cHg7XG4gIGhlaWdodDogMjA2cHg7XG4gIGxlZnQ6IDEwMHB4O1xuICB0b3A6IDE0MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xvZ290aXBvLnN2Z1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvZ28taG9tZSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDZweDtcbiAgdG9wOiAxMzZweDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJveC1sb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLmJveC1sb2dpbiAubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDIxOHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMzMHB4LzIgLSAwLjM2cHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMjE4cHgvMiArIDIyNHB4KTtcbn1cblxuLmJveC1sb2dpbiAubG9naW4gaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5ib3gtZm9yZ290IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb3Jnb3Qge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogI0ZDRkNGQztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hY2NvdW50bm90IHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICNGQ0ZDRkM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modals_info_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../modals/info/info.page */
    "./src/app/modals/info/info.page.ts");
    /* harmony import */


    var _modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../modals/remember/remember.page */
    "./src/app/modals/remember/remember.page.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(modalCtrl) {
        _classCallCheck(this, HomePage);

        this.modalCtrl = modalCtrl;
        this.hiddenLogin = false;
      }

      _createClass(HomePage, [{
        key: "openModalRemember",
        value: function openModalRemember() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal, _yield$modal$onDidDis, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.hiddenLogin = true;
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_2__["RememberPage"]
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    _context.next = 8;
                    return modal.onDidDismiss();

                  case 8:
                    _yield$modal$onDidDis = _context.sent;
                    data = _yield$modal$onDidDis.data;
                    this.hiddenLogin = data.showBoxLoing;

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openModalInfo",
        value: function openModalInfo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal, _yield$modal$onDidDis2, data;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.hiddenLogin = true;
                    _context2.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_info_info_page__WEBPACK_IMPORTED_MODULE_1__["InfoPage"]
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    _context2.next = 8;
                    return modal.onDidDismiss();

                  case 8:
                    _yield$modal$onDidDis2 = _context2.sent;
                    data = _yield$modal$onDidDis2.data;
                    this.hiddenLogin = data.showBoxLoing;

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map