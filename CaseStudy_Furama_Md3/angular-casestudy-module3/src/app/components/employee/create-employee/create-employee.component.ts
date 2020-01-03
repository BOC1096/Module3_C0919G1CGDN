import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  formCreate: FormGroup;
  employee: Employee = new Employee();
  @Output() myclick = new EventEmitter();

  validation_messages = {
    'empName': [
      { type: 'required', message: 'Tên không được để trống' },
      { type: 'pattern', message: 'Tên nhân viên không hợp lệ' }
    ],
    'empId': [
      { type: 'required', message: 'Mã nhân viên không được để trống' },
      { type: 'pattern', message: 'Mã nhân viên không đúng định dạng NV-XXXX với X là number' }
    ],
    'salary': [
      { type: 'number', message: 'Lương phải lớn hơn 0' },
      { type: 'pattern', message: 'Lương phải là số' }
    ],
    'birthday': [
      { type: 'required', message: 'Ngày sinh không được để trống' }
    ],
    'idCard': [
      { type: 'required', message: 'CMND không được để trống' },
      { type: 'pattern', message: 'CMND không đúng định dạng' }
    ],
    'numberPhone': [
      { type: 'required', message: 'SDT không được để trống' },
      { type: 'pattern', message: "Số điện thoại không đúng định dạng" }
    ],
    'email': [
      { type: 'required', message: 'Email không được để trống' },
      { type: 'pattern', message: 'Email không đúng định dạng abc@abc.abc' }
    ],
    'address': [
      { type: 'required', message: 'Địa chỉ không được để trống' },
    ]
  };
  constructor(private fb: FormBuilder, private router: Router, private service: EmployeeService) { }

  ngOnInit() {
    this.formCreate = this.fb.group({
      empId: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\NV-\d{4}(?:\s*)$/)
      ])],
      empName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^([\p{Lu}][\p{Ll}]{1,8})(\s([\p{Lu}]|[\p{Lu}][\p{Ll}]{1,10})){0,5}$/u)
      ])],
      salary: ['', Validators.compose([
        Validators.required,
        numberValidator,
        Validators.pattern(/^[-+]?[0-9]*\.?[0-9]+$/)
      ])],
      numberPhone: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(090|091|\+(84)?91|\+(84)?90)+([0-9]{7})\b/)
      ])],
      idCard: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^([\d]{9}|[\d]{12})$/)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-z][a-z0-9_\.]{4,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)
      ])],
      address: ['', Validators.compose([
        Validators.required
      ])],
      birthday: ['', Validators.compose([
        Validators.required,
      ])]
    }
    );
  }
  onSubmit(form) {
    if (this.formCreate.valid) {
      this.employee.empId = form.empId;
      this.employee.empName = form.empName;
      this.employee.salary = form.salary;
      this.employee.numberPhone = form.numberPhone;
      this.employee.idCard = form.idCard;
      this.employee.email = form.email;
      this.employee.address = form.address;
      this.employee.bitrhay = form.birthday;
      this.service.createEmployee(this.employee).subscribe(
        data => {
          this.myclick.emit();
          window.alert('Thêm thành công');
        }
      );
    }
  }
  reset() {
    this.formCreate.reset();
  }
}
function numberValidator(form: FormControl) {
  if (form.value * 1 <= 0) {
    return { number: true };
  }
  return null;
}
