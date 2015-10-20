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
var Joop = (function () {
    function Joop() {
        this.isLogged = false;
    }
    Joop.prototype.loggedIn = function (val) {
        console.log('JOOOP ' + val);
        this.isLogged = val;
    };
    return Joop;
})();
exports.Joop = Joop;
var TrainingDiaryFireba = (function () {
    function TrainingDiaryFireba(joop) {
        this.isLogged = false;
        this.exercises = ["Harjoitus1", "Harjoitus2", "Harjoitus3", "Harjoitus4"];
        console.log('nuuuu ' + joop.isLogged);
        this.isLogged = joop.isLogged;
    }
    TrainingDiaryFireba.prototype.change = function (val) {
        console.log('## CHANGE ##: ' + val);
        this.isLogged = val;
        this.change2();
    };
    TrainingDiaryFireba.prototype.change2 = function () {
        console.log('*********->>>');
        this.isLogged = !this.isLogged;
    };
    TrainingDiaryFireba.prototype.addHarjoite = function (title, notes, descr, tag) {
        console.log(title, notes, descr, tag);
    };
    TrainingDiaryFireba = __decorate([
        angular2_1.Component({
            selector: 'training-diary-fireba',
            properties: ['isLogged'],
            bindings: [Joop]
        }),
        angular2_1.View({
            template: "\n        <div class=\"container center row\">\n      <button (click)=\"change2()\"> vaihda </button>\n      </div>\n        <div [hidden]=\"isLogged\" class=\"center container row\">\n        <div>\n        <span class=\"field-caption\">title</span>\n        <input type=\"text\" class=\"input-feed\" #title>\n        </div>\n           <div>\n            <span class=\"field-caption\">description</span>\n        <input type=\"text\" class=\"input-feed\" #descr>\n        </div>\n           <div>\n            <span class=\"field-caption\">Notes</span>\n        <input type=\"text\" class=\"input-feed\" #notes>\n        </div>\n           <div>\n            <span class=\"field-caption\">tags</span>\n        <input type=\"text\" class=\"input-feed\" #tag>\n        </div>\n            <button (click)=\"addHarjoite(title.value, notes.value, descr.value, tag.value)\">Lis\u00E4\u00E4 harjoite</button>\n        <div id=\"harjoitteet\">\n           <ul>\n            <li *ng-for=\"#exercise of exercises\">\n            {{ exercise }}\n            </li>\n            </ul>\n\n        </div>\n        <textarea id=\"ta\" style=\"height:200px; width:100%; margin-top:12px;\"> </textarea>\n        <button (click)=\"getData()\"> hae data</button>\n        </div>\n    ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }),
        __param(0, angular2_1.Inject(Joop)), 
        __metadata('design:paramtypes', [Object])
    ], TrainingDiaryFireba);
    return TrainingDiaryFireba;
})();
exports.TrainingDiaryFireba = TrainingDiaryFireba;
angular2_1.bootstrap(TrainingDiaryFireba, [Joop]);
