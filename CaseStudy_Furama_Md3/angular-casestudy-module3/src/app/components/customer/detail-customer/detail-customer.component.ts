import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerServiceService } from 'src/app/service/customer-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  id: number;
  constructor(private service: CustomerServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.service.getService(this.id).subscribe(data => {
      this.customer = data;
    });
  }

}
