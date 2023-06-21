import {Component, OnInit} from '@angular/core';
import {UtilizadorService} from "../services/utilizador/utilizador-service";
import {Router} from "@angular/router";
import {ClubeService} from "../services/clube/clube-service";
import {Clube} from "../domain/clube";
import {SharedServiceComponent} from "../shared-service/shared-service.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  links: any[] = [
    {"route": "/inscricaoProvisoriaClubeJogador", "description": "Inscrição Jogador", "roles": [0, 1]},
    {"route": "/inscricaoProvisoriaClubeEquipa", "description": "Inscrição Equipa", "roles": [0, 1]},
    {"route": "/inscricaoDefinitivaAssociacaoJogador", "description": "Inscrição Jogador", "roles": [0]},
    {"route": "/inscricaoDefinitivaAssociacaoEquipa", "description": "Inscrição Equipa", "roles": [0]}
  ];

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];

  userData: any;
  email: string;
  nomee:string;

  constructor(private signupService: UtilizadorService, private router: Router, private clubeService: ClubeService, private sharedService:SharedServiceComponent) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("user-data")) {
      this.userData = JSON.parse(sessionStorage.getItem("user-data")!);
      this.sharedService.userData=this.userData;
      this.email = this.userData.emailUtilizador;
      this.sharedService.email1=this.email;
      if(this.userData.codigoClube!=0) {
        this.clubeService.getClubeByCod(this.userData.codigoClube).subscribe(data =>
          this.nomee = data.nomeClube
        );
        this.sharedService.nomee= this.nomee;
      }else{
        this.nomee=this.userData.nomeAssociacao;
      }
      this.sharedService.nomee= this.nomee;
    }
  }


  public cancelUser(email: string, firstName: string, lastName: string, phoneNumber: string, role: number): void {
    this.signupService.cancelUser1(email, firstName, lastName, phoneNumber, role).subscribe(data => {
      this.userData = data;
    });
    setTimeout(window.location.reload.bind(window.location), 500);
  }


  logout() {
    sessionStorage.removeItem("user-data");
    this.signupService.redirectToLogin();
  }
}
