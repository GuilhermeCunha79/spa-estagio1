import {Component, OnInit} from '@angular/core';


import {AuthService} from "../services/auth/authService";

@Component({
  selector: 'app-login-screen',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})

export class PageLoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private signupService: AuthService) {
  }

  ngOnInit(): void {


  }

  login(): void {
    this.signupService.getUser(this.email, this.password)?.subscribe(obj => {
      sessionStorage.setItem("user-data", JSON.stringify(obj));
      this.signupService.redirectToHome();
    });
  }
}
