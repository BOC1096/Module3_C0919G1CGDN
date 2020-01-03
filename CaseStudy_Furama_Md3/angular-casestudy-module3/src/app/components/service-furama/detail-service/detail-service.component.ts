import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/model/service';
import { ServiceFuramaService } from 'src/app/service/service-furama.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.scss']
})
export class DetailServiceComponent implements OnInit {

  service: Service = new Service();
  id: number;
  constructor(private furamaService: ServiceFuramaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.furamaService.getService(this.id).subscribe(data => {
      this.service = data;
    });
  }

}
