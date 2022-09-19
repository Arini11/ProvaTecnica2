import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from './Constants';
import { Observable } from 'rxjs';

const baseUrl = 'https://api.themoviedb.org/3/';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl+"tv/popular?api_key="+API_KEY);
  }

  getById(id: any): Observable<any> {
    return this.http.get(baseUrl+"tv/"+id+"?api_key="+API_KEY);
  }

}
