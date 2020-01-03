import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceFuramaService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/service';

  getAllService(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createService(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }
  deleteService(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getService(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  editService(obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + obj.id, obj);
  }
}
