import { Component } from '@angular/core';
import {Employee} from './models/employee,model';
import {EmployeeService} from './providers/EmployeeService';


@Component({
  selector : 'app-employees',
  templateUrl : './employee-list.component.html'
})
export class EmployeeListComponent {
    employees: Employee[];

    constructor(private employeeService: EmployeeService) {

    }

    showEmployees() {
      this.employeeService.getEmployees().subscribe(data => this.employees = data);
    }
}
