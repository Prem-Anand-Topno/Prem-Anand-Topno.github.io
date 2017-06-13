"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DepartmentService = (function () {
    function DepartmentService() {
        this.departments = [
            {
                "id": 1,
                "name": "tech"
            },
            {
                "id": 2,
                "name": "marketing"
            },
            {
                "id": 3,
                "name": "sales"
            },
            {
                "id": 4,
                "name": "finance"
            }
        ];
    }
    //get the complete list of Department
    DepartmentService.prototype.getDepartment = function () {
        console.log("get department ke andar");
        return this.departments;
    };
    //getDepartmentById
    DepartmentService.prototype.getDepartmentById = function (id) {
        for (var i = 0; i < this.departments.length; i++) {
            if (this.departments[i].id == id) {
                return this.departments[i];
            }
        }
    };
    //createDepartment
    DepartmentService.prototype.createDepartment = function (id, name) {
        this.departments.push({ "id": id, "name": name });
    };
    //delete department
    DepartmentService.prototype.deleteDepartment = function (id) {
        for (var i = 0; i < this.departments.length; i++) {
            if (this.departments[i].id == id) {
                this.departments.splice(i, 1);
            }
        }
    };
    DepartmentService.prototype.editDepartment = function (id, name) {
        for (var i = 0; i < this.departments.length; i++) {
            if (this.departments[i].id == id) {
                this.departments[i].name = name;
            }
        }
    };
    return DepartmentService;
}());
DepartmentService = __decorate([
    core_1.Injectable()
], DepartmentService);
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map