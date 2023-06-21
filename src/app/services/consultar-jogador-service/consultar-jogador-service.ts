import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ConsultarJogadorService {


  public Url = 'https://localhost:5001/api/Jogador';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  getJogadoresByLicenca(licenca:string): Observable<any>{
    return this.httpClient.get(this.Url +  '/Licenca/' + licenca).pipe(map(this.extractData))
  }


  public extractData(res: any) {
    return res || {};
  }
}
