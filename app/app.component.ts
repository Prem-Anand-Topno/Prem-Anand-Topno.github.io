import { Component } from '@angular/core';
import { DepartmentService } from './department.service';
@Component({
  selector: 'my-app',
  template: `<h1>Routing Application</h1>
            <nav>
              <a routerLink="/departmentList" routerLinkActive="active">Departments</a>
              <a routerLink="/employee" routerLinkActive="active">Employee</a>
            </nav>
            <router-outlet></router-outlet>`,
  providers: [DepartmentService]
})
export class AppComponent {
}
