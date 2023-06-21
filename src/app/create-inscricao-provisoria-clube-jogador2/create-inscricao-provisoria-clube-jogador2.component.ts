import {Component, OnInit} from '@angular/core';
import {SharedServiceComponent} from "../shared-service/shared-service.component";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ClubeService} from "../services/clube/clube-service";

@Component({
  selector: 'app-create-inscricao-provisoria-clube-jogador2',
  templateUrl: './create-inscricao-provisoria-clube-jogador2.component.html',
  styleUrls: ['./create-inscricao-provisoria-clube-jogador2.component.css']
})
export class CreateInscricaoProvisoriaClubeJogador2Component implements OnInit {

  validadeDocId: string;
  nomeDocId: string;
  nomeBoletim: string;
  nome: string;

  fileSelect?: Blob;
  fileSelect1?: Blob;
  fileSelect2?: Blob;
  fileSelect3?: Blob;
  fileSelect4?: Blob;


  imageUrl?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
  imageUrl5?: string;
  imageUrl6?: string;

  nomeFicheiro: string;
  nomeFicheiro1: string;
  nomeFicheiro2: string;
  nomeFicheiro3: string;
  nomeFicheiro4: string;

  userData: any;
  email1: string;
  nomee: string;

  roles: string[] = [
    "Colaborador de Associação",
    "Colaborador de Clube"
  ];


  constructor(private route: ActivatedRoute, private service: SharedServiceComponent, private domSani: DomSanitizer, private sharedService: SharedServiceComponent, private clubeService: ClubeService) {
  }

  ngOnInit(): void {
    this.validadeDocId = this.service.validadeDocId;
    this.nomeDocId = this.service.nomeDocId;
    this.nomeBoletim = this.service.nomeBoletim;
    this.nome = this.service.nome;
    this.imageUrl = this.service.imageUrl;
    this.imageUrl1 = this.service.imageUrl1;

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

  public onSelectNewFile($event: Event): void {

    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileSelect = inputElement.files[0];
      this.nomeFicheiro = inputElement.files[0].name;
      this.imageUrl5 = this.domSani.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelect)) as string;
    }

  }

  public onSelectNewFile1($event: Event): void {

    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileSelect1 = inputElement.files[0];
      this.nomeFicheiro1 = inputElement.files[0].name;
      this.imageUrl6 = this.domSani.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelect1)) as string;

    }

  }

  public onSelectNewFile2($event: Event): void {

    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileSelect2 = inputElement.files[0];
      this.nomeFicheiro2 = inputElement.files[0].name;
      this.imageUrl2 = this.domSani.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelect2)) as string;
    }

  }


  public onSelectNewFile3($event: Event): void {

    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileSelect3 = inputElement.files[0];
      this.nomeFicheiro3 = inputElement.files[0].name;
      this.imageUrl3 = this.domSani.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelect3)) as string;
    }

  }

  public onSelectNewFile4($event: Event): void {

    const inputElement = $event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fileSelect4 = inputElement.files[0];
      this.nomeFicheiro4 = inputElement.files[0].name;
      this.imageUrl4 = this.domSani.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelect4)) as string;
    }

  }


}
