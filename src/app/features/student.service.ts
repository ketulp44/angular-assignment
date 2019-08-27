import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class StudentService {
// http:HttpClient ;
url = `http://localhost:3000/students/`

  constructor(private http: HttpClient) { }
  getStudents():Observable<any[]>{
    console.log('inside service');
    
    return this.http.get<any[]>(this.url);
    
  }
  saveStudent(student: any){
    return this.http.post<any>(this.url, student, httpOptions);
  }
}
