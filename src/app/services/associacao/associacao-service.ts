import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

export class AssociacaoService {


  public Url = 'https://localhost:5001/api/Associacao';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
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
