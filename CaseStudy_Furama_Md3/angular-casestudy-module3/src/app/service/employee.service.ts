import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/employee';

  getAllEmployee(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createEmployee(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }
  editEmployee(obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + obj.id, obj);
  }
}

