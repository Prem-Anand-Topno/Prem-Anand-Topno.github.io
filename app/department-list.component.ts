import { Component, OnInit} from '@angular/core';
import { DepartmentService } from './department.service';
import { Router } from '@angular/router';
@Component({
  selector: 'department-list',
  template: `<h1>department list</h1>
            <button (click)= "onSelect()">Add</button>
             <ul class="list-group" *ngFor = "let department of departments">
                <li (click)="onSelect(department)" class="list-group-item" >
                    ID:{{department.id}}<br>
                    Name:{{department.name}}<br>
                </li>
             </ul> `
})
export class DepartmentListComponent{ 
    
    constructor (
        private router :Router,
        private _DepartmentService: DepartmentService ) {}

    public departments=[ ];

    ngOnInit() { 
       this.departments = this._DepartmentService.getDepartment();
    } 

    onSelect(department) {
        if(department == undefined){
            this.router.navigate(['/department']); 
        }
        else{
        this.router.navigate(['/department',department.id]);   
      }
    }

//    onAdd() {
//         this.router.navigate(['/addDepartment']);
//     }
}
