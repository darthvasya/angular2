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
var core_1 = require("@angular/core");
var ClickComponent = (function () {
    function ClickComponent() {
        this.userName = "";
        this.name = "Clcik component";
        this.userNameChange = new core_1.EventEmitter();
        this.onChanged = new core_1.EventEmitter();
    }
    ClickComponent.prototype.change = function (increased) {
        console.log(this);
        this.onChanged.emit(increased);
    };
    ClickComponent.prototype.onNameChange = function (model) {
        console.log(this);
        this.userName = model;
        this.userNameChange.emit(model);
    };
    return ClickComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ClickComponent.prototype, "userName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ClickComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClickComponent.prototype, "userNameChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClickComponent.prototype, "onChanged", void 0);
ClickComponent = __decorate([
    core_1.Component({
        selector: 'click-comp',
        templateUrl: 'app/templates/click.template.html',
        styleUrls: ['app/css/click.css']
    })
], ClickComponent);
exports.ClickComponent = ClickComponent;
//# sourceMappingURL=click.component.js.map