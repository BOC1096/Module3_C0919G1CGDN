import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from 'src/app/model/service';
import { ServiceFuramaService } from 'src/app/service/service-furama.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  services: Array<Service>;
  p: number = 1;
  search: string;
  constructor(private furamaService: ServiceFuramaService, private route: Router) {
  }

  ngOnInit() {
    this.getList();
  }
  delete(id: number, name: string) {
    if (confirm('Bạn có chắc muốn xóa dịch vụ ' + name + '?')) {
      this.furamaService.deleteService(id).subscribe(data => {
        this.getList();
      }
      );
    }
  }
  getList() {
    const promise = this.furamaService.getAllService().toPromise();
    promise.then(data => {
      this.services = data;
    });
  }
  detail(id: number) {
    this.route.navigateByUrl('service/' + id);
    console.log(this.services);
  }
  edit(id: number) {
    this.route.navigateByUrl('service/edit/' + id);
    console.log(this.services);
  }
}

