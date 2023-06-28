import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class InscricaoProvisoriaClubeJogadorService {



  public Url = 'https://localhost:5001/api/InscricaoProvisoriaClubeJogador';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`${message}`)
  }


  createInscricaoProvisoriaClubeJogador = (caminhoBoletim: string, caminhoDocId: string): Observable<any> => {
    const body = {
      "caminhoBoletim": caminhoBoletim,
      "caminhoDocidentificacao": caminhoDocId
    }
    return this.httpClient.post(this.Url, body).pipe(map(this.extractData));
  };


  createInscricaoProvisoriaClubeJogador1(nome: string, tipoDoc: string, nrIdentificacao: string,
                                         checkDigit: string, validadeDocId: string, estatuto: string,
                                         nif: string, sexo: string, dataNasc: string, paisNascenca: string,
                                         nacionalidade: string, concelhoResidencia: string, telefone: string,
                                         email: string, codClube: string, nomeAssociacao: string,
                                         nomeClube: string, modalidade: string, divisao: string, categoria: string) {
    const body = {
      "nome": nome,
      "tipoDoc": tipoDoc,
      "nrIdentificacao": nrIdentificacao,
      "checkDigit": checkDigit,
      "validadeDocId": validadeDocId,
      "nif": nif,
      "sexo": sexo,
      "dataNascimento": dataNasc,
      "paisNascenca": paisNascenca,
      "nacionalidade": nacionalidade,
      "concelhoResidencia": concelhoResidencia,
      "estatuto": estatuto,
      "telefone": telefone,
      "email": email,
      "codClube": codClube,
      "nomeClube": nomeClube,
      "nomeAssociacao": nomeAssociacao,
      "modalidade": modalidade,
      "divisao": divisao,
      "categoria": categoria
    }
    return this.httpClient.post(this.Url + '/confirm', body).pipe(map(this.extractData));
  }

  public extractData(res: any) {
    return res || {};
  }

  validateData(nome: string, tipoDoc:string, nrDoc: string,validadeDoc:string, dataNascimento:string, nif: string, sexo: string, paisOrigem: string, nacionalidade: string, telefone: string, email: string): boolean[] {

    let flag = [false, false, false, false, false, false, false, false, false, false, false,false];

    if (nome == null) {
      this.log("ERRO: O 'Nome' deve ser preenchido.");
      flag[0] = true;
    }

    if (tipoDoc == "Selecione..."|| tipoDoc==undefined) {
      this.log("ERRO: O 'Sexo' deve ser preenchido.");
      flag[1] = true;
    }

    if (nrDoc == null) {
      this.log("ERRO: O 'Nº. doc de identificação' deve ser preenchido.");
      flag[2] = true;
    }


    if (nrDoc?.length > 8) {
      this.log("ERRO: O 'Nº. doc de identificação' deve apenas conter 8 carateres numéricos.");
      flag[2] = true;
    }

    if (validadeDoc == " ") {
      this.log("ERRO: A 'Validade do Doc. Identificação' deve ser preenchido.");
      flag[3] = true;
    }

    if (dataNascimento == " ") {
      this.log("ERRO: O 'Nº. doc de identificação' deve ser preenchido.");
      flag[6] = true;
    }

    if (nif == null) {
      this.log("ERRO: O 'Nº. identificação fiscal' deve ser preenchido.");
      flag[4] = true;
    }

    if (nif?.length > 9) {
      this.log("ERRO: O 'Nº. identificação fiscal' deve apenas conter 9 carateres numéricos.");
      flag[4] = true;
    }


    if (sexo == "Selecione..."|| sexo==null) {
      this.log("ERRO: O 'Sexo' deve ser preenchido.");
      flag[5] = true;
    }

    if (paisOrigem == "Selecione..."||paisOrigem==null) {
      this.log("ERRO: O 'País de origem' deve ser preenchido.");
      flag[7] = true;
    }

    if (nacionalidade == "Selecione..." || nacionalidade==null) {
      this.log("ERRO: A 'Nacionalidade' deve ser preenchida.");
      flag[8] = true;
    }
    if (telefone == null) {
      this.log("ERRO: O 'Telefone' deve ser preenchido.");
      flag[11] = true;
    }

    if (telefone?.length > 9) {
      this.log("ERRO: O 'Telefone' deve apenas conter 9 carateres numéricos.");
      flag[11] = true;
    }


    if (email == null) {
      this.log("ERRO: O 'Email' deve ser preenchido.");
      flag[12] = true;
    }

    if (this.checkEmail(email)) {
      this.log("ERRO: O 'Email' deve estar num formato válido. [xxxx@xxxx.xx]");
      flag[12] = true;
    }

    return flag;


  }

  checkEmail(email: string): boolean {
    const regexEmail = new RegExp(/[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/);
    if (email == null) {
      return false;
    }
    return regexEmail.test(email);
  }




  validateData1(nome: string, nrDoc: string, nif: string, sexo: string, paisOrigem: string, nacionalidade: string, telefone: string, email: string): boolean {

    let flag = true;

    if (nome == null) {
      this.log("ERRO: O 'Nome' deve ser preenchido.");
      flag = false;
    }

    if (nrDoc == null) {
      this.log("ERRO: O 'Nº. doc de identificação' deve ser preenchido.");
    }

    if (nrDoc?.length > 8) {
      this.log("ERRO: O 'Nº. doc de identificação' deve apenas conter 8 carateres numéricos.");
      flag = false;
    }

    if (nif == null) {
      this.log("ERRO: O 'Nº. identificação fiscal' deve ser preenchido.");
    }

    if (nif?.length > 9) {
      this.log("ERRO: O 'Nº. identificação fiscal' deve apenas conter 9 carateres numéricos.");
      flag = false;
    }

    if (sexo == "Selecione..."|| sexo==undefined) {
      this.log("ERRO: O 'Sexo' deve ser preenchido.");
      flag = false;
    }

    if (paisOrigem == "Selecione..."||paisOrigem==undefined) {
      this.log("ERRO: O 'País de origem' deve ser preenchido.");
      flag = false;
    }

    if (nacionalidade == "Selecione..." || nacionalidade==undefined) {
      this.log("ERRO: A 'Nacionalidade' deve ser preenchida.");
      flag = false;
    }

    if (telefone == null) {
      this.log("ERRO: O 'Telefone' deve ser preenchido.");
    }

    if (telefone?.length > 9) {
      this.log("ERRO: O 'Telefone' deve apenas conter 9 carateres numéricos.");
      flag = false;
    }


    if (email == null) {
      this.log("ERRO: O 'Email' deve ser preenchido.");
      flag = false;
    }

    return flag;


  }
}
