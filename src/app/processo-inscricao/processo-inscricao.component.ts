import {Component, OnInit} from '@angular/core';
import {ProcessoInscricaoService} from "../services/processo-inscricao/processo-inscricao-service";

import {Dialog} from "../Dialog/dialog.component";
import {DialogContentExampleDialog} from "../dialog-example/dialog-example.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProcessoInscricao} from "../domain/processoInscricao";

@Component({
  selector: 'app-processo-inscricao',
  templateUrl: './processo-inscricao.component.html',
  styleUrls: ['./processo-inscricao.component.css']
})
export class ProcessoInscricaoComponent implements OnInit {
processo:ProcessoInscricao;
  listSize: number = 10;
  codOperacao:string;
  tipoProcesso:string;
  estado:string;
  epocaDesp:string;
  dataRegisto:string;
  dataSubscricao:string;
  pageNumber: number = 1;
  processos: ProcessoInscricao[] = [];
  paginaAtual = 1;
  itensPorPagina = 10;

  constructor(private processoService: ProcessoInscricaoService,public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProcessos();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

      const maxPageNumber = Math.ceil(this.processos.length/this.listSize);
      if (this.pageNumber > maxPageNumber) this.pageNumber = maxPageNumber;
    }
    else {
      this.pageNumber--;

      if (this.pageNumber < 1) this.pageNumber = 1;
    }
  }

}
