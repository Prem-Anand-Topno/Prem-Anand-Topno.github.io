
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from './department.service';

@Component({
  template: `<h1>department id : {{id}}</h1>
             <div *ngIf="setid">
             Name : <input type= "text" value={{name}} #editname>
             <button (click)="onCancel()">Cancel</button>
             <button (click)="onUpdate(id, editname.value)">Update</button>
             <button (click)="onDelete(id)">Delete</button>
             </div>
             <div *ngIf="!setid">
             ID : <input type= "text" #saveid>
             Name : <input type= "text" value={{name}} #editname>
             <button (click)= "onAdd(saveid.value,editname.value)">Add</button>
             </div>`
})

export class DepartmentDetailComponent implements OnInit{
    constructor(
        private route:ActivatedRoute , 
        private _DepartmentService: DepartmentService,
        private router :Router ){}
    public department;
    public id='';
    public name;
    public setid;
    ngOnInit()
    {
        this.id=this.route.snapshot.params['id'];
        if(this.id != undefined)
        {
            this.department = this._DepartmentService.getDepartmentById(this.id);
            this.name = this.department.name;
            this.setid = true;
        }
        else{
            this.setid = false;
        }
    }

    onCancel(){
        this.router.navigate(["/departmentList"]);   
    }

    onUpdate(id, name){
        this._DepartmentService.editDepartment(this.id,name);
        this.router.navigate(["/departmentList"]); 
    }

    onDelete(id){
        this._DepartmentService.deleteDepartment(id);
        this.router.navigate(["/departmentList"]); 
    }

    onAdd(id, name) {
       this._DepartmentService.createDepartment(id,name); 
       this.router.navigate(["/departmentList"]);
    }

 }
