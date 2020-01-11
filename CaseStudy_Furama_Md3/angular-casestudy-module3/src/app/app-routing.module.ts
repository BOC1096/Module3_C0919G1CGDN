import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { DetailEmployeeComponent } from './components/employee/detail-employee/detail-employee.component';
import { ListServiceComponent } from './components/service-furama/list-service/list-service.component';
import { DetailServiceComponent } from './components/service-furama/detail-service/detail-service.component';
import { EditServiceComponent } from './components/service-furama/edit-service/edit-service.component';
import { ContractComponent } from './components/contract/contract/contract.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContractDetailsComponent } from './components/contract-details/contract-details.component';

const routes: Routes = [
  { path: 'customer', component: ListCustomerComponent },
  { path: 'customer/:id', component: DetailCustomerComponent },
  { path: 'customer/edit/:id', component: EditCustomerComponent },
  { path: 'employee', component: ListEmployeeComponent },
  { path: 'employee/:id', component: DetailEmployeeComponent },
  { path: 'employee/edit/:id', component: EditEmployeeComponent },
  { path: 'service', component: ListServiceComponent },
  { path: 'service/:id', component: DetailServiceComponent },
  { path: 'service/edit/:id', component: EditServiceComponent },
  { path: 'contract', component: ContractComponent},
  { path: 'contractdetail', component: ContractDetailsComponent},
  { path: '', component: HomeContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
