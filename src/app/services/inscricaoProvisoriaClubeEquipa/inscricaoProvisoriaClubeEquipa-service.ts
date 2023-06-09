import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class InscricaoProvisoriaClubeEquipaService {


  public Url = 'https://localhost:5001/api/InscricaoProvisoriaClubeEquipa';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`O pedido de registo de Equipa foi submetido com sucesso! Aguarde pela aprovação da Associação. ${message} `)
  }


  createInscricaoProvisoriaClubeEquipa( codigoClube:number, categoria:string, modalidade:string,status:string,genero:string,divisao:string) {
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
