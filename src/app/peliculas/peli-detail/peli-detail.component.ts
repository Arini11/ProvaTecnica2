import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PelisService } from 'src/app/pelis.service';


@Component({
  selector: 'app-peli-detail',
  templateUrl: './peli-detail.component.html',
  styleUrls: ['./peli-detail.component.css']
})
export class PeliDetailComponent implements OnInit {

  peli:any = null;

  constructor(private _route: ActivatedRoute, private pelisService: PelisService) { }

  ngOnInit(): void {
    var id = this._route.snapshot.paramMap.get('id')
    this.pelisService.getById(id).subscribe(
      response => {
        this.peli = response
      }
    );

  }

}
