import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class InscricaoDefinitivaAssociacaoEquipaService {


  public Url = 'https://localhost:5001/api/InscricaoDefinitivaAssociacaoEquipa';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`A Equipa foi registada com sucesso! ${message} `)
  }

  createInscricaoAssociacaoEquipa(codigoClube: string, categoria: string, modalidade: string, genero: string, divisao: string) {
    const body = {
      "codigoClube": codigoClube,
      "categoria": categoria,
      "modalidade": modalidade,
      "genero": genero,
      "status": true,
      "divisao": divisao
    }
    return this.httpClient.post(this.Url, body).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }
}
