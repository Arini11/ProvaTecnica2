import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from './Constants';
import { Observable } from 'rxjs';

const baseUrl = 'https://api.themoviedb.org/3/';

@Injectable({
  providedIn: 'root'
})
export class PelisService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl+"movie/popular?api_key="+API_KEY);
  }

  getById(id: any): Observable<any> {
    return this.http.get(baseUrl+"movie/"+id+"?api_key="+API_KEY);
  }

  getByTitle(q: string): Observable<any> {
    return this.http.get(baseUrl+"search/movie?api_key="+API_KEY+"&query="+q);
  }

  getByGenre(id: any): Observable<any> {
    return this.http.get(baseUrl+"discover/movie?api_key="+API_KEY+"&with_genres="+id);
  }

  getAllGeneres(): Observable<any> {
    return this.http.get(baseUrl+"genre/movie/list?api_key="+API_KEY);
  }

}
