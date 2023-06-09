import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class InscricaoProvisoriaClubeJogadorService {


  public Url = 'https://localhost:5001/api/InscricaoProvisoriaClubeJogador';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`O pedido de registo do Jogador foi submetido com sucesso! Aguarde pela aprovação da Associação ${message} `)
  }


  createInscricaoProvisoriaClubeJogador(caminhoBoletim: string, caminhoDocId: string): Observable<any> {
    const body = {
      "caminhoBoletim": caminhoBoletim,
      "CaminhoDocidentificacao": caminhoDocId
    }
    return this.httpClient.post(this.Url, body).pipe(map(this.extractData));
  }

  createInscricaoProvisoriaClubeJogador1(nome: string, tipoDoc: string, nrIdentificacao: string, checkDigit: string, validadeDocId: string,estatuto:string, nif: string, sexo: string, dataNasc: string, paisNascenca: string, nacionalidade: string, concelhoResidencia: string, telefone: string, email: string) {
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
      "email": email
    }
    return this.httpClient.post(this.Url + '/confirm', body).pipe(map(this.extractData));
  }


  public extractData(res: any) {
    return res || {};
  }
}
