import { Customer } from './customer';
import { Service } from './service';
import { Employee } from './employee';

export class Contract {
  id: number;
  customer: Customer;
  service: Service;
  employee: Employee;
  start: Date;
  end: Date;
  total: number;
  status: boolean;
}
