import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerServiceService } from 'src/app/service/customer-service.service';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  formEdit: FormGroup;
  customer: Customer = new Customer();
  constructor(private fb: FormBuilder, private router: Router,
              private customerService: CustomerServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.customerService.getService(this.route.snapshot.params.id).subscribe(
      data => {
        this.customer = data;
        this.formEdit = this.fb.group({
          cusId: [this.customer.cusId],
          cusName: [this.customer.cusName],
          cusType: [this.customer.cusType],
          numberPhone: [this.customer.numberPhone],
          idCard: [this.customer.idCard],
          email: [this.customer.email],
          address: [this.customer.address],
          birthday: [this.customer.birthday]
        });
      });
  }
  onSubmit(form) {
    if (this.formEdit.valid) {
      console.log(form.birthday);
      this.customer.cusId = form.cusId;
      this.customer.cusName = form.cusName;
      this.customer.cusType = form.cusType;
      this.customer.numberPhone = form.numberPhone;
      this.customer.idCard = form.idCard;
      this.customer.email = form.email;
      this.customer.address = form.address;
      this.customer.birthday = form.birthday;
      this.customerService.editCustomer(this.customer).subscribe(
        data => this.router.navigateByUrl('customer')
      );
    }
  }
}
