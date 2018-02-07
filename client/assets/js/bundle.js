/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/react/index.js'");

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);



const Demo = () => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
  { to: '/' },
  'home'
);

/* harmony default export */ __webpack_exports__["a"] = (Demo);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);



const Home = () => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
  { to: '/demo' },
  'demo'
);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_pack__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_pack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_pack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(127);





/* eslint-disable no-underscore-dangle */
const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* default */], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__["default"], __WEBPACK_IMPORTED_MODULE_1_redux_pack__["middleware"]));
/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/redux-thunk/lib/index.js'");

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foo__ = __webpack_require__(128);



const reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  foo: __WEBPACK_IMPORTED_MODULE_1__foo__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_pack__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_pack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_pack__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const LOAD_FOO = 'LOAD_FOO';

const fooReducer = function fooReducer(state = { status: 'initial' }, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_FOO:
      return Object(__WEBPACK_IMPORTED_MODULE_0_redux_pack__["handle"])(state, action, {
        start: prevState => _extends({}, prevState, {
          isLoading: true,
          fooError: null
        }),
        finish: prevState => _extends({}, prevState, { isLoading: false }),
        failure: prevState => _extends({}, prevState, { fooError: payload }),
        success: prevState => _extends({}, prevState, { foo: payload })
      });
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (fooReducer);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/redux/es/index.js'");

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/redux-pack/lib/index.js'");

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_main_scss__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(119);







__WEBPACK_IMPORTED_MODULE_1_react_dom__["default"].render(__WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
  __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
  { store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */] },
  __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */], null)
), document.getElementById('app'));

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/react-dom/index.js'");

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/tiger/Documents/git/pwa_example/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/tiger/Documents/git/pwa_example/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/tiger/Documents/git/pwa_example/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tiger/Documents/git/pwa_example/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/tiger/Documents/git/pwa_example/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Demo__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home__ = __webpack_require__(118);





const route = () => __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["BrowserRouter"],
  null,
  __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__Home__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/demo', component: __WEBPACK_IMPORTED_MODULE_2__Demo__["a" /* default */] })
  )
);

/* harmony default export */ __webpack_exports__["a"] = (route);

/***/ })

/******/ });