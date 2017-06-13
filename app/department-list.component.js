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
var department_service_1 = require("./department.service");
var router_1 = require("@angular/router");
var DepartmentListComponent = (function () {
    function DepartmentListComponent(router, _DepartmentService) {
        this.router = router;
        this._DepartmentService = _DepartmentService;
        this.departments = [];
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        this.departments = this._DepartmentService.getDepartment();
    };
    DepartmentListComponent.prototype.onSelect = function (department) {
        if (department == undefined) {
            this.router.navigate(['/department']);
        }
        else {
            this.router.navigate(['/department', department.id]);
        }
    };
    return DepartmentListComponent;
}());
DepartmentListComponent = __decorate([
    core_1.Component({
        selector: 'department-list',
        template: "<h1>department list</h1>\n            <button (click)= \"onSelect()\">Add</button>\n             <ul class=\"list-group\" *ngFor = \"let department of departments\">\n                <li (click)=\"onSelect(department)\" class=\"list-group-item\" >\n                    ID:{{department.id}}<br>\n                    Name:{{department.name}}<br>\n                </li>\n             </ul> "
    }),
    __metadata("design:paramtypes", [router_1.Router,
        department_service_1.DepartmentService])
], DepartmentListComponent);
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map