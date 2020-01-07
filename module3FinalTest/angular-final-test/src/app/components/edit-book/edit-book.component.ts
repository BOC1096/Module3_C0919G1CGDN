import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { AppServiceService } from 'src/app/service/app-service.service';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  formEdit: FormGroup;
  book: Book = new Book();

  constructor(private route: Router, private service: AppServiceService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.params.id);
    this.service.getBook(this.router.snapshot.params.id).subscribe(
      data => {
        this.book = data;
        this.formEdit = this.fb.group({
          title: [this.book.title],
          author: [this.book.author],
          description: [this.book.description]
        });
      }
    );
  }
  onSubmit(form) {
    if (this.formEdit.valid) {
      this.book.title = form.title;
      this.book.author = form.author;
      this.book.description = form.description;
      this.service.editBook(this.book).subscribe(
        data => this.route.navigateByUrl('')
      );
    }
  }
  backHome() {
    this.route.navigateByUrl('');
  }
}
