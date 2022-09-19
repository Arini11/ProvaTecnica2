import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN, USERNAME } from '../Constants';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any = '';

  login: any = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem(TOKEN))
      this.router.navigate(['/home']);
  }

  logUser(): void {
    // Primer, agafar el token
    this.loginService.getToken().subscribe(
      response => {
        this.token = response.request_token
        console.log(this.token)
        // Amb el token + api_key ja podem fer login
        this.loginUser()
      }
    );
  }

  loginUser(): void {
    const data = {
      username: this.login.username,
      password: this.login.password,
      request_token: this.token
    };
    this.loginService.signup(data)
      .subscribe(
        response => {
          this.token = response;
          console.log(response);
          window.sessionStorage.setItem(TOKEN, response.request_token);
          window.sessionStorage.setItem(USERNAME, this.login.username);
          window.location.reload()
        },
        error => {
          alert("No s'ha pogut fer login.")
          this.login = {
            username: '',
            password: ''
          };
        });
  }

}
