import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/customer';

  getAllCustomer(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createCustomer(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }
  deleteService(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getService(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  editCustomer(obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + obj.id, obj);
  }
}
