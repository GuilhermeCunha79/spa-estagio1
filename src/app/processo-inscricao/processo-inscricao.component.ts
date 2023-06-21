import {Component, OnInit} from '@angular/core';
import {ProcessoInscricaoService} from "../services/processo-inscricao/processo-inscricao-service";

import {Dialog} from "../Dialog/dialog.component";
import {DialogContentExampleDialog} from "../dialog-example/dialog-example.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProcessoInscricao} from "../domain/processoInscricao";
import {ProcessoInscricao1Component} from "../processo-inscricao1/processo-inscricao1.component";
import {SharedServiceComponent} from "../shared-service/shared-service.component";
import {ClubeService} from "../services/clube/clube-service";

@Component({
  selector: 'app-processo-inscricao',
  templateUrl: './processo-inscricao.component.html',
  styleUrls: ['./processo-inscricao.component.css']
})
export class ProcessoInscricaoComponent implements OnInit {
  processo: ProcessoInscricao;
  listSize: number = 10;
  codOperacao: string;
  tipoProcesso: string;
  estado: string;
  epocaDesp: string;
  dataRegisto: string;
  dataSubscricao: string;
  pageNumber: number = 1;
  processos: ProcessoInscricao[] = [];
  paginaAtual = 1;
  itensPorPagina = 10;

  licenca: string;

  userData: any;
  email1: string;
  nomee: string;

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];

  constructor(private processoService: ProcessoInscricaoService, public dialog: MatDialog, public shared: SharedServiceComponent,private clubeService:ClubeService) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("user-data")) {
      this.userData = JSON.parse(sessionStorage.getItem("user-data")!);
      this.shared.userData=this.userData;
      this.email1 = this.userData.emailUtilizador;
      this.shared.email1=this.email1;
      if(this.userData.codigoClube!=0) {
        this.clubeService.getClubeByCod(this.userData.codigoClube).subscribe(data =>
          this.nomee = data.nomeClube
        );
        this.shared.nomee= this.nomee;
      }else{
        this.nomee=this.userData.nomeAssociacao;
      }
      this.shared.nomee= this.nomee;
    }
    this.getProcessos();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  public getLicenca(licenca: string, nProcesso: string, nomeProcesso: string, nome: string, tipoFutebol: string,
                    categoria: string, divisao: string, classe: string, dataSubs: string, dataRegisto: string, estado: string, clube: string): void {
    this.shared.licenca1 = licenca;
    this.shared.nrProcesso1 = nProcesso;
    this.shared.nome1 = nome;
    this.shared.clube1 = clube;
    this.shared.tipoFutebol1 = tipoFutebol;
    this.shared.categoria1 = categoria;
    this.shared.divisao1 = divisao;
    this.shared.classe1 = classe;
    this.shared.nomeProcesso1 = nomeProcesso;
    this.shared.estado1 = estado;
    this.shared.dataRegisto1 = dataRegisto;
    this.shared.dataSubs1 = dataSubs;

  }

  public getProcessos(): void {
    this.processoService.getProcessos().subscribe(data => {
        this.processos = data
      }
    );
  }

  public listTable(): void {
    this.processoService.listTable();
  }


  changePage(right: boolean): void {
    if (right) {
      this.pageNumber++;

      const maxPageNumber = Math.ceil(this.processos.length / this.listSize);
      if (this.pageNumber > maxPageNumber) this.pageNumber = maxPageNumber;
    } else {
      this.pageNumber--;

      if (this.pageNumber < 1) this.pageNumber = 1;
    }
  }

}
