import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContractDetailService } from 'src/app/service/contract-details.service';
import { ContractDetails } from 'src/app/model/contract-details';
import { ContractService } from 'src/app/service/contract.service';
import { Contract } from 'src/app/model/contract';
@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {
  createForm: FormGroup;
  contractDetail: ContractDetails = new ContractDetails();
  contracts: Contract[] = [];
  constructor(private contractService: ContractService, private contractDetailsService: ContractDetailService, private fb: FormBuilder) { }

  ngOnInit() {
    this.contractService.getAllContract().subscribe(
      data => this.contracts = data
    );
    this.createForm = this.fb.group({
      contract: [],
      amount: [],
      serviceInclude: []
    });
  }
  onSubmit(form) {
    if (this.createForm.valid) {
      this.contractDetail.contract = form.contract;
      this.contractDetail.serviceInclude = form.serviceInclude;
      this.contractDetail.amount = form.amount;
      this.contractDetailsService.createContract(this.contractDetail).subscribe(
        data => {
          this.createForm.reset();
          window.alert('thêm hợp đồng chi tiết thành công');
        }
      );
    }
  }
}
