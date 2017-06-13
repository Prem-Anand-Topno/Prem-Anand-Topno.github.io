
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentService{
    public departments= [
       {   
            "id":1,
            "name":"tech"
        },
        {
            "id":2,
            "name":"marketing"
        },
        {
            "id":3,
            "name":"sales"
        },
       {
            "id":4,
            "name":"finance"
        }
    ]
    //get the complete list of Department
    getDepartment() {
        console.log("get department ke andar");
        return this.departments;
    }
    //getDepartmentById
    getDepartmentById(id){
        for(let i=0; i<this.departments.length; i++)
        {
            if(this.departments[i].id == id)
            {
                return this.departments[i];
            }
        }
    }
    //createDepartment
    createDepartment(id,name){
        this.departments.push({"id":id,"name":name});
    }
    //delete department
    deleteDepartment(id){
        for(let i=0; i<this.departments.length; i++)
        {
            if(this.departments[i].id == id)
            {
                this.departments.splice(i,1);
            }
        }        
    }

    editDepartment(id,name){
        for(let i=0; i<this.departments.length; i++)
        {
            if(this.departments[i].id == id)
            {
                this.departments[i].name = name;
                
            }
        }        
    }

}