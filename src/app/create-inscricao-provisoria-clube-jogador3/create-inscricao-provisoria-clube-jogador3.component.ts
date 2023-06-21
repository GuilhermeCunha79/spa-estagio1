import {Component, OnInit} from '@angular/core';
import {Clube} from "../domain/clube";
import {ActivatedRoute} from "@angular/router";
import {SharedServiceComponent} from "../shared-service/shared-service.component";
import {ClubeService} from "../services/clube/clube-service";
import {
  InscricaoProvisoriaClubeJogadorService
} from "../services/inscricaoProvisoriaClubeJogador/inscricaoProvisoriaClubeJogador-service";

@Component({
  selector: 'app-create-inscricao-provisoria-clube-jogador3',
  templateUrl: './create-inscricao-provisoria-clube-jogador3.component.html',
  styleUrls: ['./create-inscricao-provisoria-clube-jogador3.component.css']
})
export class CreateInscricaoProvisoriaClubeJogador3Component implements OnInit {

  inscricao:any;

  nome: string;
  tipoDoc: string;
  validadeDoc: string;
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
  dataExame:string;
  validadeExame:string;

  nomeBoletim: string;
  nomeDocId: string;

  userData: any;
  email1: string;
  nomee: string;

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];

  constructor(private route: ActivatedRoute,private inscricaoClubeJogadorService:InscricaoProvisoriaClubeJogadorService, private sharedService: SharedServiceComponent, private clubeService: ClubeService) {

  }

  ngOnInit() {
    this.nome = this.sharedService.nome;
    this.tipoDoc = this.sharedService.tipoDoc;
    this.validadeDoc = this.sharedService.validadeDocId;
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
    this.dataExame=this.sharedService.dataExame;
    this.validadeExame=this.sharedService.validadeExame;

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
  }

  public createInscricaoClubeJogador1(): void {
    this.inscricaoClubeJogadorService.createInscricaoProvisoriaClubeJogador1(this.nome, this.tipoDoc, this.nrIdentificacao, this.checkDigit, this.validadeDoc, this.estatutoFpF, this.nif, this.sexo, this.dataNascimento, this.paisNascenca, this.nacionalidade, this.concelhoResidencia, this.telefone, this.email).subscribe(data => {
      this.inscricao = data
    });
    setTimeout(window.location.reload.bind(window.location), 200)
  }

}
