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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require("angular2/angular2");
var trainingfireba_1 = require('./trainingfireba');
var firebase_1 = require("firebase");
var LogIn = (function () {
    function LogIn(joop, tdf) {
        console.log('ERRRSDFFf ' + joop.isLogged);
        this.fbRef = new firebase_1.Firebase('https://trainingdiary.firebaseio.com');
        this.joop = joop;
        this.t = tdf;
    }
    LogIn.prototype.logIn = function (userid, pwd) {
        console.log("sdlkfjlkdjfsdlkfj", userid, pwd);
        this.fbRef.authWithPassword({
            "email": userid,
            "password": pwd
        }, function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            }
            else {
                console.log("Authenticated successfully with payload:", authData);
                trainingfireba_1.Joop.prototype.loggedIn(true);
                trainingfireba_1.TrainingDiaryFireba.prototype.change(true);
            }
        });
    };
    LogIn.prototype.logOut = function () {
        console.log("#### OUT -->>>!");
        this.fbRef.unauth();
        this.joop.loggedIn(false);
        this.t.change(false);
    };
    LogIn.prototype.signIn = function () {
        alert("This projec is heavily under construction so new user are not yet allowed to register !!");
    };
    LogIn.prototype.isLogged = function () {
        this.fbRef.ref().getAuth() !== null ? console.log('trueeee') : console.log('faskjdfkj');
        if (this.fbRef.ref().getAuth() !== null) {
            this.joop.loggedIn(true);
            this.t.change(true);
            return true;
        }
        else {
            this.joop.loggedIn(false);
            this.t.change(false);
            return false;
        }
    };
    LogIn = __decorate([
        angular2_1.Component({
            selector: 'log-in'
        }),
        angular2_1.View({
            template: "\n        <div class=\"center container row\">\n        <div>\n        <span class=\"field-caption\">user name</span>\n        <input type=\"text\" class=\"input-feed\" #userid>\n        </div>\n        <div>\n        <span class=\"field-caption\">password</span>\n        <input type=\"password\" class=\"input-feed\" #pwd>\n        </div>\n        <button (click)=\"logIn(userid.value, pwd.value)\">Log In</button>\n        <button (click)=\"logOut()\">Log Out</button>\n        <button (click)=\"isLogged()\">Sign In</button>\n        </div> \n        "
        }),
        __param(0, angular2_1.Inject(trainingfireba_1.Joop)),
        __param(1, angular2_1.Inject(trainingfireba_1.TrainingDiaryFireba)), 
        __metadata('design:paramtypes', [Object, Object])
    ], LogIn);
    return LogIn;
})();
exports.LogIn = LogIn;
angular2_1.bootstrap(LogIn, [trainingfireba_1.Joop, trainingfireba_1.TrainingDiaryFireba]);
