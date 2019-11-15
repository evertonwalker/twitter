(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" >\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#conteudoNavbarSuportado\" aria-controls=\"conteudoNavbarSuportado\" aria-expanded=\"false\" aria-label=\"Alterna navegação\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"conteudoNavbarSuportado\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/users\">Users</a>\r\n            </li>\r\n        </ul>\r\n        <!-- Button trigger modal -->\r\n    </div>\r\n  </nav>\r\n  \r\n  \r\n  \r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tweets/tweets.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tweets/tweets.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n    <span class=\"display-4\">Bem vindo ao twitter</span>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleFormControlTextarea1\">No que você está pensando?</label>\r\n                <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"textTweet\"></textarea>\r\n                <button class=\"btn btn-primary mt-2\" (click)=\"sendTweet()\"> Postar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"height-list\">\r\n        <ul class=\"list-group\">\r\n            <li *ngFor=\"let tweet of tweets\" class=\"list-group-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        {{ tweet.name }}\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <p class=\"card-text\">{{ tweet.date | date: 'M/d/yy, h:mm a' }}: {{ tweet.message }} </p>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n    <span class=\"display-4\">Usuários</span>\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"container mt-3\">\r\n\r\n    <div class=\"col-12 text-center mb-3 mt-3\" *ngIf=\"!hasUser; else showUsers\">\r\n        <div class=\"spinner-border\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #showUsers>\r\n        <ul class=\"list-group\">\r\n            <li *ngFor=\"let user of users\" class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <span> {{ user.name }} </span>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                        <button class=\"btn btn-primary\" (click)=\"followUser(user.id)\" *ngIf=\"hasFollow(user.id); else notfollow\">Seguir</button>\r\n                        <ng-template #notfollow>\r\n                            <button (click)=\"unfollowUser(user.id)\" class=\"btn btn-danger\">\r\n                                            Parar de seguir\r\n                                    </button>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n\r\n        </ul>\r\n    </ng-template>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tweets_tweets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweets/tweets.component */ "./src/app/tweets/tweets.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");





var routes = [
    {
        path: '', component: _tweets_tweets_component__WEBPACK_IMPORTED_MODULE_3__["TweetsComponent"]
    },
    {
        path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'twitter-front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tweets_tweets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tweets/tweets.component */ "./src/app/tweets/tweets.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _tweets_tweets_component__WEBPACK_IMPORTED_MODULE_6__["TweetsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/follow.service.ts":
/*!***********************************!*\
  !*** ./src/app/follow.service.ts ***!
  \***********************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FollowService = /** @class */ (function () {
    function FollowService(http) {
        this.http = http;
    }
    FollowService.prototype.followUser = function (userOne, userTwo) {
        return this.http.post('/api/follow/', { userOne: userOne, userTwo: userTwo });
    };
    FollowService.prototype.unfollowUser = function (userOne, userTwo) {
        return this.http.post('/api/unfollow/', { userOne: userOne, userTwo: userTwo });
    };
    FollowService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FollowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FollowService);
    return FollowService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/tweet.service.ts":
/*!**********************************!*\
  !*** ./src/app/tweet.service.ts ***!
  \**********************************/
/*! exports provided: TweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetService", function() { return TweetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TweetService = /** @class */ (function () {
    function TweetService(http) {
        this.http = http;
    }
    TweetService.prototype.getJustTwetter = function (id) {
        return this.http.get("/api/tweet/" + id);
    };
    TweetService.prototype.getTwettersFromUser = function (id) {
        return this.http.get("/api/tweets/" + id);
    };
    TweetService.prototype.postTwett = function (message, id) {
        return this.http.post('/api/tweet/', { message: message, id: id });
    };
    TweetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TweetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TweetService);
    return TweetService;
}());



/***/ }),

/***/ "./src/app/tweets/tweets.component.css":
/*!*********************************************!*\
  !*** ./src/app/tweets/tweets.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height-list {\r\n    height: calc(100vh - 22em);\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXRzL3R3ZWV0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90d2VldHMvdHdlZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVpZ2h0LWxpc3Qge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjJlbSk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tweets/tweets.component.ts":
/*!********************************************!*\
  !*** ./src/app/tweets/tweets.component.ts ***!
  \********************************************/
/*! exports provided: TweetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetsComponent", function() { return TweetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tweet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tweet.service */ "./src/app/tweet.service.ts");



var TweetsComponent = /** @class */ (function () {
    function TweetsComponent(tweetService) {
        this.tweetService = tweetService;
        this.textTweet = '';
        this.tweets = [];
    }
    TweetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tweetService.getTwettersFromUser(1)
            .subscribe(function (r) { return _this.tweets = r.results; }, function (error) { return console.log(error); });
    };
    TweetsComponent.prototype.sendTweet = function () {
        var _this = this;
        this.tweetService.postTwett(this.textTweet, 1)
            .subscribe(function () {
            _this.textTweet = '';
            _this.tweetService.getTwettersFromUser(1)
                .subscribe(function (r) { return _this.tweets = r.results; }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    TweetsComponent.ctorParameters = function () { return [
        { type: _tweet_service__WEBPACK_IMPORTED_MODULE_2__["TweetService"] }
    ]; };
    TweetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tweets',
            template: __webpack_require__(/*! raw-loader!./tweets.component.html */ "./node_modules/raw-loader/index.js!./src/app/tweets/tweets.component.html"),
            styles: [__webpack_require__(/*! ./tweets.component.css */ "./src/app/tweets/tweets.component.css")]
        })
    ], TweetsComponent);
    return TweetsComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function (id) {
        return this.http.get("/api/users/" + id);
    };
    UserService.prototype.getAllUsersFollow = function (id) {
        return this.http.get("/api/followers/" + id);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _follow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../follow.service */ "./src/app/follow.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, followService) {
        this.userService = userService;
        this.followService = followService;
        this.users = [];
        this.idFollows = new Set();
        this.hasUser = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers(1)
            .subscribe(function (r) {
            _this.users = r.result;
            _this.userService.getAllUsersFollow(1)
                .subscribe(function (rFollows) {
                rFollows.results.forEach(function (element) {
                    _this.idFollows.add(element.fk_another_user);
                });
                _this.hasUser = true;
            });
        }, function (error) { return console.log(error); });
    };
    UsersComponent.prototype.followUser = function (id) {
        var _this = this;
        this.followService.followUser(1, id)
            .subscribe(function () {
            _this.idFollows.add(id);
        }, function (error) { return console.log(error); });
    };
    UsersComponent.prototype.unfollowUser = function (id) {
        var _this = this;
        this.followService.unfollowUser(1, id)
            .subscribe(function () {
            _this.idFollows.delete(id);
        }, function (error) { return console.log(error); });
    };
    UsersComponent.prototype.hasFollow = function (id) {
        return !this.idFollows.has(id);
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _follow_service__WEBPACK_IMPORTED_MODULE_3__["FollowService"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projetos\twitter\twitter-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map