import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/service/contract.service';
import { Contract } from 'src/app/model/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})

export class ContractComponent implements OnInit {
  contracts: Array<Contract>;
  customerContracts: Contract[] = [];
  p: number = 1;
  search: string;
  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.contractService.getAllContract().subscribe(
      data => {
        this.contracts = data;
        console.log(this.contracts);
        for (const tepm of this.contracts) {
          if (tepm.status === true) {
            this.customerContracts.push(tepm);
          }
        }
      }
    );
  }

}
