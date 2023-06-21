import {Component, OnInit} from '@angular/core';
import {InscricaoProvisoriaClubeJogador} from "../domain/inscricaoProvisoriaClubeJogador";
import {
  InscricaoProvisoriaClubeJogadorService
} from "../services/inscricaoProvisoriaClubeJogador/inscricaoProvisoriaClubeJogador-service";
import {UtilizadorService} from "../services/utilizador/utilizador-service";
import {DomSanitizer} from "@angular/platform-browser";
import {Jogador} from "../domain/jogador";
import {PessoaService} from "../services/pessoa/pessoa-service";
import {FormControl, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AfterViewChecked, ChangeDetectorRef} from '@angular/core'
import {NacionalidadeService} from "../services/nacionalidade/nacionalidade-service";
import {PaisNascencaService} from "../services/paisNascenca/paisNascenca-service";
import {SharedServiceComponent} from "../shared-service/shared-service.component";
import {ClubeService} from "../services/clube/clube-service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-create-inscricao-provisoria-clube-jogador',
  templateUrl: './create-inscricao-provisoria-clube-jogador.component.html',
  styleUrls: ['./create-inscricao-provisoria-clube-jogador.component.css'],
})
export class CreateInscricaoProvisoriaClubeJogadorComponent implements OnInit {

  inscricao: InscricaoProvisoriaClubeJogador;
  jogador: Jogador;
  fileSelect?: Blob;
  fileSelect1?: Blob;
  imageUrl?: string;
  imageUrl1?: string;
  nomeFicheiro: string;
  nomeFicheiro1: string;

  base64: string = "Base64...";
  base641: string = "Base64...";

  // permissions: number[] = [1,4];
  paisesNacionalidade: string[] = [];
  paisesNascenca: string[] = [];


  nome: string;
  tipoDoc: string;
  validadeDocId: string=" ";
  nif: string;
  sexo: string;
  estatutoFpF: string;
  dataNascimento: string="";
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



  dataAgora: Date;
  nacionalidade: string;
  paisNascenca: string;
  permissions: number[] = [1, 2];

  userData: any;
  email1: string;
  nomee: string;

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];

  constructor(public inscricaoClubeJogadorService: InscricaoProvisoriaClubeJogadorService, private spinner: NgxSpinnerService, private utilizadorSerice: UtilizadorService,
              private domSani: DomSanitizer, private pessoaService: PessoaService, private readonly changeDetectorRef: ChangeDetectorRef,
              private nacionalidadeService: NacionalidadeService, private paisNascencaService: PaisNascencaService, private sharedService: SharedServiceComponent, private clubeService: ClubeService) {
  }

  ngOnInit(): void {

    this.utilizadorSerice.checkPermission(this.permissions);
    this.nacionalidadeService.getNacionalidades().subscribe((data: string[]) => this.paisesNacionalidade = data.map((item: any) => item.nacionalidadePais));
    this.paisNascencaService.getPaisesNascenca().subscribe((data: string[]) => this.paisesNascenca = data.map((item: any) => item.nascencaPais));
    this.dataAgora = new Date();

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

    this.validadeDocId=" ";
    this.dataNascimento=" ";
  }

  public onSelectNewFile($event: Event): void {

    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileSelect = inputElement.files[0];
      this.nomeFicheiro = inputElement.files[0].name;
      this.imageUrl = this.domSani.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelect)) as string;
      this.base64 = "Base64...";
    }

  }

  public onSelectNewFile1($event: Event): void {

    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileSelect1 = inputElement.files[0];
      this.nomeFicheiro1 = inputElement.files[0].name;
      this.imageUrl1 = this.domSani.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelect1)) as string;
      this.base641 = "Base64...";
    }

  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new ErrorStateMatcher();

  convertFileToBase64(): void {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelect as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
    }
  }

  convertFileToBase641(): void {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelect1 as Blob);
    reader.onloadend = () => {
      this.base641 = reader.result as string;
    }
  }

  public createInscricaoClubeJogador(): void {

    this.spinner.show();
    // setTimeout(() => {
    // Recebeu a resposta, oculta o spinner

    this.inscricaoClubeJogadorService.createInscricaoProvisoriaClubeJogador(this.base64, this.base641).subscribe(data => {
      this.inscricao = data;
      this.nome = this.inscricao.nome;
      this.tipoDoc = this.inscricao.tipoDoc;
      this.nrIdentificacao = this.inscricao.nrIdentificacao;
      this.validadeDocId = this.inscricao.validadeDocId;
      this.nif = this.inscricao.nif;
      this.sexo = this.inscricao.sexo;
      this.dataNascimento = this.inscricao.dataNascimento;
      this.paisNascenca = this.inscricao.paisNascenca;
      this.nacionalidade = this.inscricao.nacionalidade;
      this.concelhoResidencia = this.inscricao.concelhoResidencia;
      this.estatutoFpF = this.inscricao.estatutoFpF;
      this.telefone = this.inscricao.telefone;
      this.email = this.inscricao.email;
      this.codClube = this.inscricao.codClube;
      this.nomeClube = this.inscricao.nomeClube;
      this.nomeAssociacao = this.inscricao.nomeAssociacao;
      this.modalidade = this.inscricao.modalidade;
      this.divisao = this.inscricao.divisao;
      this.categoria = this.inscricao.categoria;
      this.dataAgora = data;
    });
    // this.spinner.hide();
    // }, 20000000);

    //setTimeout(window.location.reload.bind(window.location), 200)
  }


  public createInscricaoClubeJogador2(): void | null {
    if (this.inscricaoClubeJogadorService.validateData(this.nome, this.nrIdentificacao, this.nif, this.sexo, this.paisNascenca, this.nacionalidade, this.telefone, this.email)) {
      this.sharedService.nome = this.nome;
      this.sharedService.tipoDoc = this.tipoDoc;
      this.sharedService.nrIdentificacao = this.nrIdentificacao;
      this.sharedService.validadeDocId = this.validadeDocId;
      this.sharedService.nif = this.nif;
      this.sharedService.sexo = this.sexo;
      this.sharedService.validadeDocId = this.validadeDocId;
      this.sharedService.dataNascimento = this.dataNascimento;
      this.sharedService.nacionalidade = this.nacionalidade;
      this.sharedService.concelhoResidencia = this.concelhoResidencia;
      this.sharedService.estatutoFpF = this.estatutoFpF;
      this.sharedService.telefone = this.telefone;
      this.sharedService.email = this.email;
      this.sharedService.codClube = this.codClube;
      this.sharedService.nomeClube = this.nomeClube;
      this.sharedService.nomeAssociacao = this.nomeAssociacao;
      this.sharedService.modalidade = this.modalidade;
      this.sharedService.divisao = this.divisao;
      this.sharedService.categoria = this.categoria;
      this.sharedService.paisNascenca = this.paisNascenca;
      this.sharedService.nomeBoletim = this.nomeFicheiro;
      this.sharedService.nomeDocId = this.nomeFicheiro1;
      this.sharedService.imageUrl = this.imageUrl;
      this.sharedService.imageUrl1 = this.imageUrl1;


    } else return null;
    //setTimeout(window.location.reload.bind(window.location), 200)
  }


}
