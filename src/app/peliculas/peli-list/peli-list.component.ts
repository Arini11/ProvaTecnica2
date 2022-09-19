import { Component, OnInit } from '@angular/core';
import { PelisService } from 'src/app/pelis.service';

@Component({
  selector: 'app-peli-list',
  templateUrl: './peli-list.component.html',
  styleUrls: ['./peli-list.component.css']
})
export class PeliListComponent implements OnInit {

  pelis:any = null;

  constructor(private pelisService: PelisService) { }

  ngOnInit(){

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


}
