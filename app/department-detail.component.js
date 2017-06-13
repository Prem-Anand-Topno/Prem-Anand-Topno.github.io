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
var DepartmentDetailComponent = (function () {
    function DepartmentDetailComponent(route, _DepartmentService, router) {
        this.route = route;
        this._DepartmentService = _DepartmentService;
        this.router = router;
        this.id = '';
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        if (this.id != undefined) {
            this.department = this._DepartmentService.getDepartmentById(this.id);
            this.name = this.department.name;
            this.setid = true;
        }
        else {
            this.setid = false;
        }
    };
    DepartmentDetailComponent.prototype.onCancel = function () {
        this.router.navigate(["/departmentList"]);
    };
    DepartmentDetailComponent.prototype.onUpdate = function (id, name) {
        this._DepartmentService.editDepartment(this.id, name);
        this.router.navigate(["/departmentList"]);
    };
    DepartmentDetailComponent.prototype.onDelete = function (id) {
        this._DepartmentService.deleteDepartment(id);
        this.router.navigate(["/departmentList"]);
    };
    DepartmentDetailComponent.prototype.onAdd = function (id, name) {
        this._DepartmentService.createDepartment(id, name);
        this.router.navigate(["/departmentList"]);
    };
    return DepartmentDetailComponent;
}());
DepartmentDetailComponent = __decorate([
    core_1.Component({
        template: "<h1>department id : {{id}}</h1>\n             <div *ngIf=\"setid\">\n             Name : <input type= \"text\" value={{name}} #editname>\n             <button (click)=\"onCancel()\">Cancel</button>\n             <button (click)=\"onUpdate(id, editname.value)\">Update</button>\n             <button (click)=\"onDelete(id)\">Delete</button>\n             </div>\n             <div *ngIf=\"!setid\">\n             ID : <input type= \"text\" #saveid>\n             Name : <input type= \"text\" value={{name}} #editname>\n             <button (click)= \"onAdd(saveid.value,editname.value)\">Add</button>\n             </div>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        department_service_1.DepartmentService,
        router_1.Router])
], DepartmentDetailComponent);
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=department-detail.component.js.map