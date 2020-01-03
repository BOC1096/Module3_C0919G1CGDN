import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerServiceService } from 'src/app/service/customer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  formCreate: FormGroup;
  customer: Customer = new Customer();
  @Output() myclick = new EventEmitter();

  validation_messages = {
    'cusName': [
      { type: 'required', message: 'Tên không được để trống' },
      { type: 'pattern', message: 'Tên khách hàng không hợp lệ' }
    ],
    'cusId': [
      { type: 'required', message: 'Mã khách hàng không được để trống' },
      { type: 'pattern', message: 'Mã khách hàng không đúng định dạng KH-XXXX với X là number' }
    ],
    'cusType': [
      { type: 'required', message: 'Loại khách không được để trống' },
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
  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.formCreate = this.fb.group({
      cusId: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\KH-\d{4}(?:\s*)$/)
      ])],
      cusName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^([\p{Lu}][\p{Ll}]{1,8})(\s([\p{Lu}]|[\p{Lu}][\p{Ll}]{1,10})){0,5}$/u)
      ])],
      cusType: ['', Validators.compose([
        Validators.required
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
      this.customer.cusId = form.cusId;
      this.customer.cusName = form.cusName;
      this.customer.cusType = form.cusType;
      this.customer.numberPhone = form.numberPhone;
      this.customer.idCard = form.idCard;
      this.customer.email = form.email;
      this.customer.address = form.address;
      this.customer.birthday = form.birthday;
      this.customerService.createCustomer(this.customer).subscribe(
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

