import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employees: Array<Employee>;
  p: number = 1;
  search: string;
  constructor(private service: EmployeeService, private route: Router) {
  }

  ngOnInit() {
    this.getList();
  }
  delete(id: number, name: string) {
    if (confirm('Bạn có chắc muốn xóa nhân viên ' + name + '?')) {
      this.service.deleteEmployee(id).subscribe(data => {
        this.getList();
      }
      );
    }
  }
  getList() {
    const promise = this.service.getAllEmployee().toPromise();
    promise.then(data => {
      this.employees = data;
    });
  }
  detail(id: number) {
    this.route.navigateByUrl('employee/' + id);
    console.log(this.employees);
  }
  edit(id: number) {
    this.route.navigateByUrl('employee/edit/' + id);
    console.log(this.employees);
  }
}

