import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeesInterface } from '../interfaces/employees.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  @Input() private employee: EmployeesInterface;
  @Output() private onDelete = new EventEmitter();
  private isReported = false;

  changeStatus() {
    this.isReported = !this.isReported;
  }

  deleteEmployee() {
    this.onDelete.emit(this.employee);
  }
}
