import {Component, OnInit} from '@angular/core';
import {Employee} from './models/employee,model';
import {EmployeeService} from './providers/EmployeeService';


@Component({
  selector : 'app-employees',
  templateUrl : './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
    employees: Employee[];
    private employee : Employee= new class implements Employee {
      firstName: 'Collins';
      id: 1;
      lastName: 'Mugarura';
      salary: 42000;
      startDate: '2017-11-09';
    };
    private emloyee1: Employee={
      firstName : 'Sienna',
      id: 2,
      lastName : 'Mugarura',
      salary :100,
      startDate : '2018-03-09'
    }
    selectedEmployees: Employee[] = [this.employee, this.emloyee1];

    constructor(private employeeService: EmployeeService) {

    }

    showEmployees() {
      this.employeeService.getEmployees().subscribe((employees: Employee[]) => this.employees = employees);
    }

  ngOnInit(): void {
      this.showEmployees();
  }
}
