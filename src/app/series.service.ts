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

  getByTitle(q: string): Observable<any> {
    return this.http.get(baseUrl+"search/tv?api_key="+API_KEY+"&query="+q);
  }

  getByGenre(id: any): Observable<any> {
    return this.http.get(baseUrl+"discover/tv?api_key="+API_KEY+"&with_genres="+id);
  }

  getAllGeneres(): Observable<any> {
    return this.http.get(baseUrl+"genre/tv/list?api_key="+API_KEY);
  }

}
