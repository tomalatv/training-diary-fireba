var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var trainingfireba_1 = require('./ts/components/trainingfireba');
var login_1 = require('./ts/components/login');
var DiaryApp = (function () {
    function DiaryApp(router, location) {
        console.log('DiaryApp');
        this.router = router;
        this.location = location;
        this.location.go('/training');
    }
    DiaryApp.prototype.getLinkStyle = function (path) {
        console.log('Path: ' + path);
        return this.location.path() === path;
    };
    DiaryApp = __decorate([
        angular2_1.Component({
            selector: 'diary'
        }),
        angular2_1.View({
            templateUrl: './app.html',
            directives: [login_1.LogIn, trainingfireba_1.TrainingDiaryFireba, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: login_1.LogIn, as: 'login' }),
            new router_1.Route({ path: '/training', component: trainingfireba_1.TrainingDiaryFireba, as: 'trainings' })
        ]), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Location !== 'undefined' && router_1.Location) === 'function' && _b) || Object])
    ], DiaryApp);
    return DiaryApp;
    var _a, _b;
})();
angular2_1.bootstrap(DiaryApp, [http_1.HTTP_PROVIDERS]);
