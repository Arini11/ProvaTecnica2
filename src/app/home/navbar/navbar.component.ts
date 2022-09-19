import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { USERNAME } from 'src/app/Constants';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private loginService: LoginService) { }

  user: any;

  ngOnInit(): void {
    this.user = window.sessionStorage.getItem(USERNAME)
    if(this.user == undefined)
      this.router.navigate(['/login'])
    console.log(this.user)
  }

  logout(): void {
    window.sessionStorage.clear();
    this.user = undefined;
    this.router.navigate(['/login']);
  }

}
