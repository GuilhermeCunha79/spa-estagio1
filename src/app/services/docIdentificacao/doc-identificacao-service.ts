import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DocIdentificacaoService {


  public Url = 'https://localhost:5001/api/DocIdentificacao';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`Equipa criada com sucesso! ${message} `)
  }

  getDocIdByNrId(nrId: string): Observable<any> {
    return this.httpClient.get(this.Url + '/NrIdCivil/' + nrId).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }
}
