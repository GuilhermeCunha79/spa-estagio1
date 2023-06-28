import {Component} from '@angular/core';

@Component({
  selector: 'app-shared-service',
  templateUrl: './shared-service.component.html',
  styleUrls: ['./shared-service.component.css']
})
export class SharedServiceComponent {

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
  dataSubs: Date;
  dataExame:string;
  validadeExame:string;
  nrOrdem:string;

  nomeBoletim: string;
  nomeDocId: string;
  aptidao:string;

  imageUrl?: string;
  imageUrl1?: string;

  userData: any;
  email1: string;
  nomee: string;



  nrProcesso1: string;
  nome1:string;
  licenca1:string;
  clube1:string;
  tipoFutebol1:string;
  categoria1:string;
  divisao1:string;
  classe1:string;
  nomeProcesso1:string;
  estado1:string;
  dataRegisto1:string;
  dataSubs1:string;

  constructor() {
  }
}
