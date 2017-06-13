import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from './department.service';
@Component({
  template: `<h1>Enter new Department
             ID : <input type= "text" #id>
             Name : <input type= "text" #name>
             <button (click)="addDepartment(id.value, name.value)">Add</button>`
})
export class AddDepartmentComponent implements OnInit{
    constructor(
        private route:ActivatedRoute , 
        private _DepartmentService: DepartmentService,
        private router :Router  ){}
    public departments= [];
    
    ngOnInit()
    {
        this.departments = this._DepartmentService.getDepartment();
    }

    addDepartment(id, name) {
       this._DepartmentService.createDepartment(id,name); 
       this.router.navigate(["/departmentList"]);
    }

 }