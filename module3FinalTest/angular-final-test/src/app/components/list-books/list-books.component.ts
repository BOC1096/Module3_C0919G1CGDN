import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { AppServiceService } from 'src/app/service/app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private service: AppServiceService, private route: Router) { }

  ngOnInit() {
    this.getAll();
    console.log(this.books);
  }
  getAll() {
    this.service.getAllBook().subscribe(
      data => {this.books = data;
      }
    );
  }
  detail(id: number) {
    this.route.navigateByUrl('detail/' + id);
  }
  edit(id: number) {
    this.route.navigateByUrl('edit/' + id);
  }
  create() {
    this.route.navigateByUrl('create');
  }
  delete(id: number) {
    this.route.navigateByUrl('delete/' + id);
  }
}
