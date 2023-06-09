import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ClubeService {


  public Url = 'https://localhost:5001/api/Clube';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`Clube criado com sucesso! ${message} `)
  }

  getEquipas(): Observable<any> {
    return this.httpClient.get(this.Url).pipe(map(this.extractData))
  }

  getClubeByCod(identificadorEquipa: string): Observable<any> {
    return this.httpClient.get(this.Url + '/ByIdentifier/' + identificadorEquipa).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }
}
