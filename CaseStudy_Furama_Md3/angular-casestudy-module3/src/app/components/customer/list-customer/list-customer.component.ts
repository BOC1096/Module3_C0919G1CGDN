import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerServiceService } from 'src/app/service/customer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  customers: Array<Customer>;
  p: number = 1;
  search: string;
  constructor(private customerService: CustomerServiceService, private route: Router) {
  }

  ngOnInit() {
    this.getList();
  }
  delete(id: number, name: string) {
    if (confirm('Bạn có chắc muốn xóa khách hàng ' + name + '?')) {
      this.customerService.deleteService(id).subscribe(data => {
        this.getList();
      }
      );
    }
  }
  getList() {
    const promise = this.customerService.getAllCustomer().toPromise();
    promise.then(data => {
      this.customers = data;
    });
  }
  detail(id: number) {
    this.route.navigateByUrl('customer/' + id);
    console.log(this.customers);
  }
  edit(id: number) {
    this.route.navigateByUrl('customer/edit/' + id);
    console.log(this.customers);
  }
}
