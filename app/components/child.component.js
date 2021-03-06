"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ChildComponent = (function () {
    function ChildComponent() {
        this.name = "Евгений";
        this.clicks = 0;
        this.secondName = "ss";
    }
    ChildComponent.prototype.onChanged = function (increased) {
        console.log(increased);
        increased == true ? this.clicks++ : this.clicks--;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "secondName", void 0);
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-comp',
            templateUrl: 'app/templates/child.template.html',
            styles: ["h2, p {color:blue;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map