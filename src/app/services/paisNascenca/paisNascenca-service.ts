import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PaisNascencaService {


  public Url = 'https://localhost:5001/api/PaisNascenca';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`Pessoa criada com sucesso! ${message} `)
  }

  getPaisesNascenca(): Observable<any> {
    return this.httpClient.get(this.Url).pipe(map(this.extractData));
  }

  public extractData(res: any) {
    return res || {};
  }
}
