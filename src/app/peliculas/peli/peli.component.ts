import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
  styleUrls: ['./peli.component.css']
})
export class PeliComponent implements OnInit {

  @Input() peli: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
