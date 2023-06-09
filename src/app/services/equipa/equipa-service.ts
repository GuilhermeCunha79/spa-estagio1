import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EquipaService{


  public Url = 'https://localhost:5001/api/Equipa';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`Equipa criada com sucesso! ${message} `)
  }

  getEquipas(): Observable<any>{
    return this.httpClient.get(this.Url).pipe(map(this.extractData))
  }

  getEquipasByIdentificadorEquipa(identificadorEquipa:string): Observable<any>{
    return this.httpClient.get(this.Url +  'ByIdentifier' + identificadorEquipa).pipe(map(this.extractData))
  }

  createValidEquipa( codigoClube:number, categoria:string, modalidade:string,status:string,genero:string,divisao:string) {
    const body = {

      "codigoClube":codigoClube,
      "categoria":categoria,
      "modalidade":modalidade,
      "genero": genero,
      "status":status,
      "divisao":divisao

    }
    return this.httpClient.post(this.Url,body).pipe(map(this.extractData))
  }



  public extractData(res: any) {
    return res || {};
  }

}
