import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaculatorComponent } from './caculator/caculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
