import {Component, OnInit} from '@angular/core';
import {
  CreateInscricaoProvisoriaClubeJogadorComponent
} from "../create-inscricao-provisoria-clube-jogador/create-inscricao-provisoria-clube-jogador.component";
import {ActivatedRoute} from "@angular/router";
import {SharedServiceComponent} from "../shared-service/shared-service.component";
import {ClubeService} from "../services/clube/clube-service";
import {Clube} from "../domain/clube";

@Component({
  selector: 'app-create-inscricao-provisoria-clube-jogador1',
  templateUrl: './create-inscricao-provisoria-clube-jogador1.component.html',
  styleUrls: ['./create-inscricao-provisoria-clube-jogador1.component.css']
})
export class CreateInscricaoProvisoriaClubeJogador1Component implements OnInit {

  nome: string;
  tipoDoc: string;
  validadeDocId: string;
  nif: string;
  sexo: string;
  estatutoFpF: string;
  dataNascimento: string;
  concelhoResidencia: string;
  telefone: string;
  email: string;
  nrIdentificacao: string;
  checkDigit: string;
  codClube: string;
  nomeClube: string;
  nomeAssociacao: string;
  modalidade: string;
  divisao: string;
  categoria: string;
  nacionalidade: string;
  paisNascenca: string;
  data: string;
  dataExame: string;
  validadeExame: string;

  nomeBoletim: string;
  nomeDocId: string;

  userData: any;
  email1: string;
  nomee: string;

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];

  clubes: Clube[] = [];

  constructor(private route: ActivatedRoute, private sharedService: SharedServiceComponent, private clubeService: ClubeService) {

  }

  ngOnInit() {
    this.nome = this.sharedService.nome;
    this.tipoDoc = this.sharedService.tipoDoc;
    this.validadeDocId = this.sharedService.validadeDocId;
    this.nif = this.sharedService.nif;
    this.sexo = this.sharedService.sexo;
    this.estatutoFpF = this.sharedService.estatutoFpF;
    this.dataNascimento = this.sharedService.dataNascimento;
    this.concelhoResidencia = this.sharedService.concelhoResidencia;
    this.telefone = this.sharedService.telefone;
    this.email = this.sharedService.email;
    this.nrIdentificacao = this.sharedService.nrIdentificacao;
    this.checkDigit = this.sharedService.checkDigit;
    this.codClube = this.sharedService.codClube;
    this.nomeClube = this.sharedService.nomeClube;
    this.nomeAssociacao = this.sharedService.nomeAssociacao;
    this.modalidade = this.sharedService.modalidade;
    this.divisao = this.sharedService.divisao;
    this.categoria = this.sharedService.categoria;
    this.nacionalidade = this.sharedService.nacionalidade;
    this.paisNascenca = this.sharedService.paisNascenca;
    this.data = Date();
    this.nomeBoletim = this.sharedService.nomeBoletim;
    this.nomeDocId = this.sharedService.nomeDocId;

    if (sessionStorage.getItem("user-data")) {
      this.userData = JSON.parse(sessionStorage.getItem("user-data")!);
      this.sharedService.userData = this.userData;
      this.email1 = this.userData.emailUtilizador;
      this.sharedService.email1 = this.email1;
      if (this.userData.codigoClube != 0) {
        this.clubeService.getClubeByCod(this.userData.codigoClube).subscribe(data =>
          this.nomee = data.nomeClube
        );
        this.sharedService.nomee = this.nomee;
      } else {
        this.nomee = this.userData.nomeAssociacao;
      }
      this.sharedService.nomee = this.nome;
    }
    this.sharedService.dataExame = this.dataExame;
    this.sharedService.validadeExame = this.validadeExame;
    this.getClubes();

  }


  public getClubes(): void {
    this.clubeService.getEquipas().subscribe(data => {
        this.clubes = data;
      }
    );
  }

}
