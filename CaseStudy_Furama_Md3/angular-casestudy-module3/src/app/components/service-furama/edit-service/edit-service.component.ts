import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/model/service';
import { ServiceFuramaService } from 'src/app/service/service-furama.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  formEdit: FormGroup;
  service: Service = new Service();
  constructor(private fb: FormBuilder, private router: Router,
    private furamaService: ServiceFuramaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.furamaService.getService(this.route.snapshot.params.id).subscribe(
      data => {
        this.service = data;
        this.formEdit = this.fb.group({
          serviceId: [this.service.serviceId],
          serviceName: [this.service.serviceName],
          area: [this.service.area],
          numberFloor: [this.service.numberFloor],
          price: [this.service.price],
          maxPerson: [this.service.maxPerson],
          status: [this.service.status]
        });
      });
  }
  onSubmit(form) {
    if (this.formEdit.valid) {
      this.service.serviceId = form.serviceId;
      this.service.serviceName = form.serviceName;
      this.service.area = form.area;
      this.service.numberFloor = form.numberFloor;
      this.service.price = form.price;
      this.service.maxPerson = form.maxPerson;
      this.service.status = form.status;
      this.furamaService.editService(this.service).subscribe(
        data => this.router.navigateByUrl('service')
      );
    }
  }
}
