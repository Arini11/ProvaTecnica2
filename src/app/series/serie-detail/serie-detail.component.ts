import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/series.service';


@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serie:any = null;

  constructor(private _route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit(): void {
    var id = this._route.snapshot.paramMap.get('id')
    this.seriesService.getById(id).subscribe(
      response => {
        this.serie = response
      }
    );
  }






}
