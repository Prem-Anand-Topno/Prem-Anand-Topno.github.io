import { NgModule }      from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { DepartmentListComponent }   from './department-list.component';
import { EmployeeListComponent }   from './employee-list.component';
import { DepartmentDetailComponent }   from './department-detail.component';
import { AddDepartmentComponent }   from './add-department.component';

const routes : Routes = [
    {path: "departmentList", component: DepartmentListComponent},
    {path: "employee", component: EmployeeListComponent},
    {path: "addDepartment", component: AddDepartmentComponent},
    {path: "department/:id", component: DepartmentDetailComponent},
    {path: "department", component: DepartmentDetailComponent}
]

@NgModule({
  imports:  [ 
              RouterModule.forRoot(routes) 
            ],
  exports: [
            RouterModule
           ]
})
export class AppRoutingModule { }
export const routingComponents = [ DepartmentListComponent, EmployeeListComponent ,DepartmentDetailComponent ,AddDepartmentComponent] 
