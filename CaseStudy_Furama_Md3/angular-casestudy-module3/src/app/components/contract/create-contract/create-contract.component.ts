import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CustomerServiceService } from 'src/app/service/customer-service.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ServiceFuramaService } from 'src/app/service/service-furama.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContractService } from 'src/app/service/contract.service';
import { Service } from 'src/app/model/service';
import { Customer } from 'src/app/model/customer';
import { Contract } from 'src/app/model/contract';


@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {


  formCreate: FormGroup;
  employees: Array<Employee>;
  services: Array<Service>;
  customers: Array<Customer>;
  contract: Contract = new Contract();
  @Output() myclick = new EventEmitter();

  validation_messages = {
    'total': [
      { type: 'pattern', message: 'Tổng tiền phải là số' },
      { type: 'number', message: 'Tổng tiền phải lớn hơn 0' }
    ],
    'start': [
      { type: 'required', message: 'Ngày bắt đầu không được để trống' }
    ],
    'end': [
      { type: 'required', message: 'Ngày kết thúc khôn được để trống' }
    ]
  };
  constructor(private fb: FormBuilder,
              private empService: EmployeeService,
              private cusService: CustomerServiceService,
              private furamaService: ServiceFuramaService,
              private contractService: ContractService) { }

  ngOnInit() {
    this.furamaService.getAllService().subscribe(
      data => this.services = data
    );
    this.empService.getAllEmployee().subscribe(
      data => this.employees = data
    );
    this.cusService.getAllCustomer().subscribe(
      data => this.customers = data
    )
    this.formCreate = this.fb.group({
      start: ['', Validators.compose([
        Validators.required
      ])],
      end: ['', Validators.compose([
        Validators.required
      ])],
      total: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[-+]?[0-9]*\.?[0-9]+$/),
        numberValidator
      ])],
      customer: [],
      employee: [],
      service: [],
      status: []
    }
    );
  }
  onSubmit(form) {
    if (this.formCreate.valid) {
      this.contract.start = form.start;
      this.contract.end = form.end;
      this.contract.total = form.total;
      this.contract.customer = form.customer;
      this.contract.employee = form.employee;
      this.contract.service = form.service;
      this.contract.status = true;
      this.contractService.createContract(this.contract).subscribe(
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
