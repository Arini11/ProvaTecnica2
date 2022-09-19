import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/series.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series:any = null;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(){

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

}
