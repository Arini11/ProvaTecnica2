import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = null;

  constructor(private router:Router, private loginServide: LoginService) { }

  ngOnInit(): void {
  }

}
