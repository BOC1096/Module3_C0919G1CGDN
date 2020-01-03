import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/model/service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServiceFuramaService } from 'src/app/service/service-furama.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

  formCreate: FormGroup;
  service: Service = new Service();
  @Output() myclick = new EventEmitter();

  validation_messages = {
    'serviceName': [
      { type: 'required', message: 'Tên không được để trống' },
      { type: 'pattern', message: 'Tên dịch vụ không hợp lệ' }
    ],
    'serviceId': [
      { type: 'required', message: 'Mã dịch vụ không được để trống' },
      { type: 'pattern', message: 'Mã dịch vụ không đúng định dạng DV-XXXX với X là number' }
    ],
    'area': [
     
      { type: 'pattern', message: 'diện tích phải là số' },
      { type: 'number', message: 'Diện tích phải lớn hơn 0' }
    ],
    'numberFloor': [

      { type: 'pattern', message: 'Số tầng phải là số nguyên dương' },
      { type: 'number', message: 'Số tầng phải lớn hơn 0' }
    ],
    'maxPerson': [

      { type: 'pattern', message: 'Số người phải là số nguyên dương' },
      { type: 'number', message: 'Số người phải lớn hơn 0' }
    ],
    'price': [

      { type: 'number', message: 'Gía phải lớn hơn 0' },
      { type: 'pattern', message: 'Gía phải là số' }
    ]
  };
  constructor(private fb: FormBuilder, private router: Router, private furamaService: ServiceFuramaService) { }

  ngOnInit() {
    this.formCreate = this.fb.group({
      serviceId: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\DV-\d{4}(?:\s*)$/)
      ])],
      serviceName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^([\p{Lu}][\p{Ll}]{1,8})(\s([\p{Lu}]|[\p{Lu}][\p{Ll}]{1,10})){0,5}$/u)
      ])],
      area: ['', Validators.compose([
        Validators.required,
        numberValidator,
        Validators.pattern(/^[-+]?[0-9]*\.?[0-9]+$/)
      ])],
      numberFloor: ['', Validators.compose([
        Validators.required,
        numberValidator,
        Validators.pattern(/^([\d])/)
      ])],
      price: ['', Validators.compose([
        Validators.required,
        numberValidator,
        Validators.pattern(/^[-+]?[0-9]*\.?[0-9]+$/)
      ])],
      maxPerson: ['', Validators.compose([
        Validators.required,
        numberValidator,
        Validators.pattern(/^([\d])/)
      ])],
      status: []
    }
    );
  }
  onSubmit(form) {
    if (this.formCreate.valid) {
      this.service.serviceId = form.serviceId;
      this.service.serviceName = form.serviceName;
      this.service.area = form.area;
      this.service.numberFloor = form.numberFloor;
      this.service.price = form.price;
      this.service.maxPerson = form.maxPerson;
      this.service.status = form.status;
      this.furamaService.createService(this.service).subscribe(
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
