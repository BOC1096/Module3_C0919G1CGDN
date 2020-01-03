import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule} from './material';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { DetailEmployeeComponent } from './components/employee/detail-employee/detail-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { FooterComponent } from './footer/footer.component';
import { CreateServiceComponent } from './components/service-furama/create-service/create-service.component';
import { EditServiceComponent } from './components/service-furama/edit-service/edit-service.component';
import { ListServiceComponent } from './components/service-furama/list-service/list-service.component';
import { DetailServiceComponent } from './components/service-furama/detail-service/detail-service.component';
import { ContractComponent } from './components/contract/contract/contract.component';
import { CreateContractComponent } from './components/contract/create-contract/create-contract.component';
import { HomeContentComponent } from './home-content/home-content.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    DetailCustomerComponent,
    TopBarComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    DetailEmployeeComponent,
    EditEmployeeComponent,
    FooterComponent,
    CreateServiceComponent,
    EditServiceComponent,
    ListServiceComponent,
    DetailServiceComponent,
    ContractComponent,
    CreateContractComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
