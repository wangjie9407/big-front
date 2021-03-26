/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apis/login.js":
/*!***************************!*\
  !*** ./src/apis/login.js ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = function login(ctx){\r\n    ctx.body = 'you are logining....'\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLy4vc3JjL2FwaXMvbG9naW4uanM/ZGIxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXBpcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9naW4oY3R4KXtcclxuICAgIGN0eC5ib2R5ID0gJ3lvdSBhcmUgbG9naW5pbmcuLi4uJ1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apis/login.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"src\";\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\r\nconst Router = __webpack_require__(/*! koa-router */ \"koa-router\");\r\nconst koaBody = __webpack_require__(/*! koa-body */ \"koa-body\");\r\nconst cors  = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\r\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\r\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\r\nconst routers = __webpack_require__(/*! ./routers/routers.js */ \"./src/routers/routers.js\");\r\nconst koajson = __webpack_require__(/*! koa-json */ \"koa-json\");\r\nconst koacompose = __webpack_require__(/*! koa-compose */ \"koa-compose\");\r\n\r\nconst app = new Koa();\r\nconst router = new Router();\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst middleware = koacompose([\r\n    koaBody(),\r\n    cors(),\r\n    routers(),\r\n    helmet(),\r\n    statics(path.join(__dirname,'../public')),\r\n    router.allowedMethods(), // 未经处理的请求会反应404\r\n])\r\n\r\napp.use(middleware) \r\n\r\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVksbUJBQU8sQ0FBQyxnQkFBSztBQUN6QixlQUFlLG1CQUFPLENBQUMsOEJBQVk7QUFDbkMsZ0JBQWdCLG1CQUFPLENBQUMsMEJBQVU7QUFDbEMsY0FBYyxtQkFBTyxDQUFDLDRCQUFXO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyw4QkFBWTtBQUNuQyxnQkFBZ0IsbUJBQU8sQ0FBQyw4QkFBWTtBQUNwQyxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBc0I7QUFDOUMsZ0JBQWdCLG1CQUFPLENBQUMsMEJBQVU7QUFDbEMsbUJBQW1CLG1CQUFPLENBQUMsZ0NBQWE7O0FBRXhDO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBLb2EgPSByZXF1aXJlKCdrb2EnKTtcclxuY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xyXG5jb25zdCBrb2FCb2R5ID0gcmVxdWlyZSgna29hLWJvZHknKTtcclxuY29uc3QgY29ycyAgPSByZXF1aXJlKCdAa29hL2NvcnMnKTtcclxuY29uc3QgaGVsbWV0ID0gcmVxdWlyZSgna29hLWhlbG1ldCcpO1xyXG5jb25zdCBzdGF0aWNzID0gcmVxdWlyZSgna29hLXN0YXRpYycpO1xyXG5jb25zdCByb3V0ZXJzID0gcmVxdWlyZSgnLi9yb3V0ZXJzL3JvdXRlcnMuanMnKTtcclxuY29uc3Qga29hanNvbiA9IHJlcXVpcmUoJ2tvYS1qc29uJyk7XHJcbmNvbnN0IGtvYWNvbXBvc2UgPSByZXF1aXJlKCdrb2EtY29tcG9zZScpO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEtvYSgpO1xyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBrb2Fjb21wb3NlKFtcclxuICAgIGtvYUJvZHkoKSxcclxuICAgIGNvcnMoKSxcclxuICAgIHJvdXRlcnMoKSxcclxuICAgIGhlbG1ldCgpLFxyXG4gICAgc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCcuLi9wdWJsaWMnKSksXHJcbiAgICByb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSwgLy8g5pyq57uP5aSE55CG55qE6K+35rGC5Lya5Y+N5bqUNDA0XHJcbl0pXHJcblxyXG5hcHAudXNlKG1pZGRsZXdhcmUpIFxyXG5cclxuYXBwLmxpc3RlbigzMDAwKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routers/login.js":
/*!******************************!*\
  !*** ./src/routers/login.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\r\nconst login  = __webpack_require__(/*! ../apis/login.js */ \"./src/apis/login.js\");\r\n\r\nconst router = new Router();\r\n\r\nrouter.get('/login', login)\r\n\r\nmodule.exports =  router//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLy4vc3JjL3JvdXRlcnMvbG9naW4uanM/ODIxNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMsOEJBQVk7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLDZDQUFrQjs7QUFFekM7O0FBRUE7O0FBRUEiLCJmaWxlIjoiLi9zcmMvcm91dGVycy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKTtcclxuY29uc3QgbG9naW4gID0gcmVxdWlyZSgnLi4vYXBpcy9sb2dpbi5qcycpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnL2xvZ2luJywgbG9naW4pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICByb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routers/login.js\n");

/***/ }),

/***/ "./src/routers/routers.js":
/*!********************************!*\
  !*** ./src/routers/routers.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const koaCombine = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\r\nconst login = __webpack_require__(/*! ./login.js */ \"./src/routers/login.js\");\r\n\r\nconst routers = koaCombine(login);\r\n\r\nmodule.exports = routers;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLy4vc3JjL3JvdXRlcnMvcm91dGVycy5qcz82M2U4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixtQkFBTyxDQUFDLGdEQUFxQjtBQUNoRCxjQUFjLG1CQUFPLENBQUMsMENBQVk7O0FBRWxDOztBQUVBIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcnMvcm91dGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtvYUNvbWJpbmUgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJyk7XHJcbmNvbnN0IGxvZ2luID0gcmVxdWlyZSgnLi9sb2dpbi5qcycpO1xyXG5cclxuY29uc3Qgcm91dGVycyA9IGtvYUNvbWJpbmUobG9naW4pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routers/routers.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/cors");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-body");;

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");;

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-compose");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-json");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;