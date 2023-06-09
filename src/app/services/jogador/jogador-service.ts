import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class JogadorService
{

  public Url = 'https://localhost:5001/api/Jogador';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`Jogador criado com sucesso! ${message} `)
  }

  getJogadores(): Observable<any>{
    return this.httpClient.get(this.Url).pipe(map(this.extractData))
  }

  getJogadoresByLicenca(licenca:string): Observable<any>{
    return this.httpClient.get(this.Url +  'ByIdentifier' + licenca).pipe(map(this.extractData))
  }

  createValidJogador( estatutoFpF:string, identificadorPessoa:string, identificadorEquipa:string,status:string) {
    const body = {
      "estatutoFpF": estatutoFpF,
      "identificadorPessoa": identificadorPessoa,
      "identificadorEquipa": identificadorEquipa,
      "status":status
    }
    return this.httpClient.post(this.Url,body).pipe(map(this.extractData))
  }

  updateJogador( licenca:number, estatutoFpF:string, identificadorPessoa:string, identificadorEquipa:string,status:string) {
    const body = {
      "estatutoFpF": estatutoFpF,
      "identificadorPessoa": identificadorPessoa,
      "identificadorEquipa": identificadorEquipa,
      "status":status
    }
    console.log(body);
    return this.httpClient.put(this.Url + 'ByIdentifier'+ licenca, body ).pipe(map(this.extractData))
  }


  public extractData(res: any) {
    return res || {};
  }

}
