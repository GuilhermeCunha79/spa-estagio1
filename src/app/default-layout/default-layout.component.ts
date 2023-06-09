import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../services/utilizador/utilizador-service";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit{

  constructor(private signupService: UtilizadorService) {
  }

  ngOnInit(): void {
    this.signupService.redirectToLogin();
  }

  logout() {
    sessionStorage.removeItem("user-data");
    this.signupService.redirectToLogin();
  }
}
