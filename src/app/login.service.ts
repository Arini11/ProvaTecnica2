import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { API_KEY } from './Constants';


const base = "https://api.themoviedb.org/3/"

export interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getToken(): Observable<any>{
    return this.http.get(base+"authentication/token/new?api_key="+API_KEY);
  }

  signup(data: any): Observable<any> {
    return this.http.post(`${base}authentication/token/validate_with_login?api_key=${API_KEY}`, data);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${base}/users/${name}`);
  }

}
