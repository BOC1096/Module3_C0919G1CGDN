import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  book: Book = new Book();
  id: number;
  constructor(private service: AppServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.service.getBook(this.id).subscribe(data => {
      this.book = data;
    });
  }
  delete() {
    this.service.deleteBook(this.id).subscribe(
      data => {
        this.router.navigateByUrl('');
        window.alert('xóa thành công');
      }
    );
  }
  backHome() {
    this.router.navigateByUrl('');
  }
}
