import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/contract';
  getAllContract(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getContract(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  createContract(obj: any): Observable<any> {
    return this.http.post(this.baseUrl, obj);
  }
  editContract(obj: any): Observable<any> {
    return this.http.patch(this.baseUrl + '/' + identifierModuleUrl, obj);
  }
}
