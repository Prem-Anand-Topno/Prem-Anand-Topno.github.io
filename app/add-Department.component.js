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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var department_service_1 = require("./department.service");
var AddDepartmentComponent = (function () {
    function AddDepartmentComponent(route, _DepartmentService, router) {
        this.route = route;
        this._DepartmentService = _DepartmentService;
        this.router = router;
        this.departments = [];
    }
    AddDepartmentComponent.prototype.ngOnInit = function () {
        this.departments = this._DepartmentService.getDepartment();
    };
    AddDepartmentComponent.prototype.addDepartment = function (id, name) {
        this._DepartmentService.createDepartment(id, name);
        this.router.navigate(["/departmentList"]);
    };
    return AddDepartmentComponent;
}());
AddDepartmentComponent = __decorate([
    core_1.Component({
        template: "<h1>Enter new Department\n             ID : <input type= \"text\" #id>\n             Name : <input type= \"text\" #name>\n             <button (click)=\"addDepartment(id.value, name.value)\">Add</button>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        department_service_1.DepartmentService,
        router_1.Router])
], AddDepartmentComponent);
exports.AddDepartmentComponent = AddDepartmentComponent;
//# sourceMappingURL=add-Department.component.js.map