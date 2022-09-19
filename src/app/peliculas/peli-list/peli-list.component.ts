import { Component, OnInit } from '@angular/core';
import { PelisService } from 'src/app/pelis.service';

@Component({
  selector: 'app-peli-list',
  templateUrl: './peli-list.component.html',
  styleUrls: ['./peli-list.component.css']
})
export class PeliListComponent implements OnInit {

  pelis:any = null;
  searchInput:string = ""
  generes:any[] = [];

  constructor(private pelisService: PelisService) { }

  ngOnInit(){
    this.pelisService.getAllGeneres().subscribe(
      response => {
        // id, name
        this.generes = response.genres
        console.log("generes"+response.genres)
      },
      error => {
        console.log("ERROR:"+error)
      });

  }

  getMasPopulares() {
    this.pelisService.getAll().subscribe(
      response => {
        // Most popular limit 10
        this.pelis = response.results
        console.log(response.results)
      },
      error => {
        console.log("ERROR:"+error)
      });
  }

  searchByTitle(){
    console.log(this.searchInput)
    this.pelisService.getByTitle(this.searchInput).subscribe(
      response => {
        console.log(response)
        this.pelis = response.results

      },
      error => {
        console.log("ERROR:"+error)
      });
  }

  searchByGenere(e:any){
    if(e.target.value == 0) return
    this.pelisService.getByGenre(e.target.value).subscribe(
      response => {
        console.log(response.results)
        this.pelis = response.results

      },
      error => {
        console.log("ERROR:"+error)
      });

  }


}
