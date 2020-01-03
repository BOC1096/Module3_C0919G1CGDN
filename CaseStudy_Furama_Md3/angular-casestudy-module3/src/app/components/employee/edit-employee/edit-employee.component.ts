import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  formEdit: FormGroup;
  employee: Employee = new Employee();
  constructor(private fb: FormBuilder, private router: Router,
              private service: EmployeeService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.service.getEmployee(this.route.snapshot.params.id).subscribe(
      data => {
        this.employee = data;
        this.formEdit = this.fb.group({
          empId: [this.employee.empId],
          empName: [this.employee.empName],
          salary: [this.employee.salary],
          numberPhone: [this.employee.numberPhone],
          idCard: [this.employee.idCard],
          email: [this.employee.email],
          address: [this.employee.address],
          birthday: [this.employee.bitrhay]
        });
      });
  }
  onSubmit(form) {
    if (this.formEdit.valid) {
      this.employee.empId = form.empId;
      this.employee.empName = form.empName;
      this.employee.salary = form.salary;
      this.employee.numberPhone = form.numberPhone;
      this.employee.idCard = form.idCard;
      this.employee.email = form.email;
      this.employee.address = form.address;
      this.employee.bitrhay = form.birthday;
      this.service.editEmployee(this.employee).subscribe(
        data => this.router.navigateByUrl('employee')
      );
    }
  }
}
