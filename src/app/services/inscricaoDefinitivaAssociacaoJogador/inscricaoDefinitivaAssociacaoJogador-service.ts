import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class InscricaoDefinitivaAssociacaoJogadorService {


  public Url = 'https://localhost:5001/api/InscricaoDefinitivaAssociacaoEquipa';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`O Jogador foi registada com sucesso! ${message} `)
  }

  createInscricaoDefinitivaAssociacaoJogador(estatuto: string, identificadorPessoa: string, identificadorEquipa: string) {
    const body = {
      "estatutoFpF":estatuto,
      "IdentificadorPessoa":identificadorPessoa,
      "identificadorEquipa":identificadorEquipa,
      "status": true
    }
    return this.httpClient.post(this.Url, body).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }
}
