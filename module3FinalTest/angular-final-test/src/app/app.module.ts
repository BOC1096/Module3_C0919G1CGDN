import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopBarComponent,
    ListBooksComponent,
    DetailBookComponent,
    EditBookComponent,
    CreateBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
