import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { AppServiceService } from 'src/app/service/app-service.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  formCreate: FormGroup;
  book: Book = new Book();
  books: Book[] = [];
  constructor(private route: Router, private service: AppServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.service.getAllBook().subscribe(
      data => this.books = data
    )
    this.formCreate = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }
  onSubmit(form) {
    if (this.formCreate.valid) {
      this.book.title = form.title;
      this.book.author = form.author;
      this.book.description = form.description;
      this.service.createBook(this.book).subscribe(
        data => this.route.navigateByUrl('')
      );
    }
  }
  backHome() {
    this.route.navigateByUrl('');
  }
}
