import {Component, OnInit} from '@angular/core';
import {ConsultarJogadorService} from "../services/consultar-jogador-service/consultar-jogador-service";
import {JogadorVisualizacao} from "../domain/jogadorVisualizacao";
import {AuthService} from "../services/auth/authService";
import {SharedServiceComponent} from "../shared-service/shared-service.component";
import {ClubeService} from "../services/clube/clube-service";

@Component({
  selector: 'app-consultar-jogador',
  templateUrl: './consultar-jogador.component.html',
  styleUrls: ['./consultar-jogador.component.css']
})
export class ConsultarJogadorComponent implements OnInit {

  consulta: JogadorVisualizacao;

  inputLicenca: string;

  userData: any;
  email1: string;
  nomee: string;

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];

  nome: string
  licenca: string;
  nrId: string;
  dataNasc: string;
  sexo: string;
  nacionalidadee: string;
  paisNascenca: string;
  estatuto: string;
  formado:string;
  nrEpocas:string;
  situacao:string;

  constructor(private consultar: ConsultarJogadorService, private auth: AuthService, private sharedService: SharedServiceComponent, private clubeService: ClubeService) {

  }

  ngOnInit(): void {
    if (sessionStorage.getItem("user-data")) {
      this.userData = JSON.parse(sessionStorage.getItem("user-data")!);
      this.sharedService.userData=this.userData;
      this.email1 = this.userData.emailUtilizador;
      this.sharedService.email1=this.email1;
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

  public getByLicenca(): void {
    this.consultar.getJogadoresByLicenca(this.inputLicenca).subscribe(data => {
      this.consulta = data;
      this.nome = this.consulta.nome;
      this.sexo = this.consulta.sexo;
      this.nrId = this.consulta.nrId;
      this.nacionalidadee = this.consulta.nacionalidade;
      this.estatuto = this.consulta.estatuto;
      this.dataNasc = this.consulta.dataNasc;
      this.paisNascenca = this.consulta.paisNascenca;
      this.licenca = this.consulta.licenca;
      this.formado="Não";
      this.nrEpocas="1";
      this.situacao="Ativo";
    })
  }

  protected readonly InputDeviceInfo = InputDeviceInfo;
}
