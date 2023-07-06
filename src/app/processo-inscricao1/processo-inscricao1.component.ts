import {Component, OnInit} from '@angular/core';
import {JogadorService} from "../services/jogador/jogador-service";
import {PessoaService} from "../services/pessoa/pessoa-service";
import {ProcessoInscricaoService} from "../services/processo-inscricao/processo-inscricao-service";
import {SharedServiceComponent} from "../shared-service/shared-service.component";
import {Jogador} from "../domain/jogador";
import {JogadorVisualizacao} from "../domain/jogadorVisualizacao";
import {DocIdentificacaoService} from "../services/docIdentificacao/doc-identificacao-service";
import {DocIdentificacao} from "../domain/docIdentificacao";
import {ProcessoInscricao} from "../domain/processoInscricao";
import {ClubeService} from "../services/clube/clube-service";
import {AuthService} from "../services/auth/authService";
import {NgIf} from "@angular/common";
import {Pessoa} from "../domain/Pessoa";
import {Router} from "@angular/router";

@Component({
  selector: 'app-processo-inscricao1',
  templateUrl: './processo-inscricao1.component.html',
  styleUrls: ['./processo-inscricao1.component.css']
})
export class ProcessoInscricao1Component implements OnInit {

  jogador: JogadorVisualizacao;
  doc: DocIdentificacao;
  processo: ProcessoInscricao;
  pessoa: Pessoa;

  nomeProcesso: string;
  categoria: string;
  dataNasc: string;
  licenca: string;
  paisNascenca: string;
  nacionalidade: string;
  sexo: string;
  nrId: string;
  nome: string;

  tipoProcesso: string;
  estado: string;
  nrProcesso: string;

  nif: string;
  validade: string;
  concelhoResidencia: string;
  estatuto: string;
  telefone: string;
  email: string;
  tipoDoc: string;

  clube: string;
  associacao: string;
  dataInscricao: string;
  numEpoca: string;
  modalidade: string;
  divisao: string;
  classe: string;
  contratoForm: string;
  dataExameMedico: string;
  dataValidadeMedico: string;
  seguro: string;
  companhia: string;
  apolice: string;
  criado: string;
  atualizado: string;
  checkDigit: string;

  userData: any;
  email1: string;
  nomee: string;

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];

  constructor(private jogadorService: JogadorService, private auth: AuthService, private clubeService: ClubeService,
              private docService: DocIdentificacaoService, private pessoaService: PessoaService,
              private processoService: ProcessoInscricaoService, private shared: SharedServiceComponent,
              private router: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem("user-data")) {
      this.userData = JSON.parse(sessionStorage.getItem("user-data")!);
      this.shared.userData = this.userData;
      this.email1 = this.userData.emailUtilizador;
      this.shared.email1 = this.email1;
      if (this.userData.codigoClube != 0) {
        this.clubeService.getClubeByCod(this.userData.codigoClube).subscribe(data =>
          this.nomee = data.nomeClube
        );
        this.shared.nomee = this.nomee;
      } else {
        this.nomee = this.userData.nomeAssociacao;
      }
      this.shared.nomee = this.nomee;
    }
    this.getInformacao();
  }

  getInformacao(): void {
    this.jogadorService.getJogadoresByLicenca(this.shared.licenca1).subscribe(data => {
        this.jogador = data;
        this.licenca = this.jogador.licenca;
        this.nrId = this.jogador.nrId;
        this.dataNasc = this.jogador.dataNasc;
        this.sexo = this.jogador.sexo;
        this.nacionalidade = this.jogador.nacionalidade;
        this.paisNascenca = this.jogador.paisNascenca;
        this.estatuto = this.jogador.estatuto;


        this.docService.getDocIdByNrId(this.jogador.nrId).subscribe(data => {
          this.doc = data;
          this.validade = this.doc.validadeDoc;
          this.nif = this.doc.nif;
          this.checkDigit = this.doc.checkDigit;
        })


        this.pessoaService.getPessoaByNrId(this.jogador.nrId).subscribe(data => {
          this.pessoa = data;
          this.email = this.pessoa.email;
          this.concelhoResidencia = this.pessoa.concelhoResidencia;
          this.telefone = this.pessoa.telefone;
        })
      }
    );
    this.tipoDoc = "Número de identificação civil";
    this.licenca = this.shared.licenca1;
    this.nrProcesso = this.shared.nrProcesso1;
    this.nome = this.shared.nome1;
    this.clube = this.shared.clube1;
    this.modalidade = this.shared.tipoFutebol1;
    this.categoria = this.shared.categoria1;
    this.divisao = this.shared.divisao1;
    this.classe = "Amador";
    this.tipoProcesso = this.shared.nomeProcesso1;
    this.estado = this.shared.estado1;
    this.dataInscricao = this.shared.dataRegisto1;
    this.numEpoca = "1";
    this.criado = this.shared.nomee;
    this.atualizado = this.shared.nomee;
    this.contratoForm = "Não";
  }
  public aprovarProcesso(): void {
    this.processoService.updateProcessoInscricao(this.nrProcesso, this.tipoProcesso, this.estado, this.dataInscricao,
      this.dataInscricao, this.dataInscricao).subscribe(data => {
      this.processo = data;
    });
    this.redirect('/processoInscricao');
    setTimeout(window.location.reload.bind(window.location), 200);
  }

redirect(url: string): void {
  this.router.navigate([url]).then();
}

public reprovarProcesso(): void {
    this.processoService.deleteProcessoInscricao(this.nrProcesso, this.tipoProcesso, this.estado, this.dataInscricao,
      this.dataInscricao, this.dataInscricao);
  }

}
