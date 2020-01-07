import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/books';

  getAllBook(): Observable<any> {
    return this.http.get(this.baseUrl );
  }
  createBook(obj: any): Observable<any> {
    return this.http.post(this.baseUrl , obj);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getBook(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  editBook(obj: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + obj.id, obj);
  }
}
