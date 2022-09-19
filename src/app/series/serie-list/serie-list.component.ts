import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/series.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series:any = null;
  searchInput:string = ""
  generes:any[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(){
    this.seriesService.getAllGeneres().subscribe(
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
    this.seriesService.getAll().subscribe(
      response => {
        // Most popular limit 10
        this.series = response.results
        console.log(response.results)
      },
      error => {
        console.log("ERROR:"+error)
      });
  }

  searchByTitle(){
    console.log(this.searchInput)
    this.seriesService.getByTitle(this.searchInput).subscribe(
      response => {
        console.log(response.results)
        this.series = response.results

      },
      error => {
        console.log("ERROR:"+error)
      });
  }

  searchByGenere(e:any){
    if(e.target.value == 0) return
    this.seriesService.getByGenre(e.target.value).subscribe(
      response => {
        console.log(response.results)
        this.series = response.results

      },
      error => {
        console.log("ERROR:"+error)
      });

  }

}
