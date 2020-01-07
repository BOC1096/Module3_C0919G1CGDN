import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { EditBookComponent} from './components/edit-book/edit-book.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '' , component: ListBooksComponent },
  { path: 'detail/:id', component: DetailBookComponent },
  { path: 'create', component: CreateBookComponent},
  { path: 'delete/:id', component: DeleteBookComponent},
  { path: 'edit/:id', component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
