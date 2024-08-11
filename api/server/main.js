/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
const tslib_1 = __webpack_require__(1);
const express_1 = tslib_1.__importDefault(__webpack_require__(4));
const morgan_1 = tslib_1.__importDefault(__webpack_require__(5));
const postRoute_1 = tslib_1.__importDefault(__webpack_require__(6));
const userRoute_1 = tslib_1.__importDefault(__webpack_require__(8));
exports.app = (0, express_1.default)();
//MIDDLEWARES
console.log('NODE ENVIRONMENT :', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    console.log('Morgan is being used');
    exports.app.use((0, morgan_1.default)("dev"));
}
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use(express_1.default.json());
//ROUTES
exports.app.use('/api/v1/posts', postRoute_1.default);
exports.app.use('/api/v1/users', userRoute_1.default);
exports.app.all('*', (req, res) => {
    res.send("<h1>Page Not Found</h1>");
});


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const express_1 = tslib_1.__importDefault(__webpack_require__(4));
const postController_1 = __webpack_require__(7);
const router = express_1.default.Router();
router.route('/')
    .get(postController_1.getPosts)
    .post(postController_1.createPost);
exports["default"] = router;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPosts = exports.createPost = void 0;
const createPost = (req, res) => {
    console.log('hey');
    res.send('<h1>This is the create post</h1>');
};
exports.createPost = createPost;
const getPosts = (req, res) => {
    res.send("<h1>post</h1>");
};
exports.getPosts = getPosts;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const express_1 = tslib_1.__importDefault(__webpack_require__(4));
const postController_1 = __webpack_require__(7);
const router = express_1.default.Router();
router.route('/')
    .get(postController_1.getPosts)
    .post(postController_1.createPost);
exports["default"] = router;


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const mongoose_1 = tslib_1.__importDefault(__webpack_require__(2));
const app_1 = __webpack_require__(3);
const DB = process.env.DATABASE_CONNECTION_STRING.replace('<DATABASE_PASSWORD>', process.env.DATABASE_PASSWORD);
//connect to database
mongoose_1.default
    .connect(DB)
    .then(() => console.log('DB connection successful!'))
    .catch((err) => console.log(err));
const port = process.env.PORT || 3333;
app_1.app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

})();

/******/ })()
;