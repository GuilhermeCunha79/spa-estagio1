import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
@Injectable()
export class PessoaService {


  public Url = 'https://localhost:5001/api/Pessoa';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`Pessoa criada com sucesso! ${message} `)
  }

  getPessoas(): Observable<any> {
    return this.httpClient.get(this.Url).pipe(map(this.extractData))
  }

  getPessoaById(codOperacao: string): Observable<any> {
    return this.httpClient.get(this.Url + '/ByIdentifier/' + codOperacao).pipe(map(this.extractData));
  }


  createPessoa(nome:string,dataNascimento:string,tipoGenero:string,email:string,nrIdentificacao:string,nascencaPais:string,nacionalidadePais:string,telefone:string,concelhoResidencia:string): Observable<any> {
    const body = {
      "nome": nome,
      "dataNascimento": dataNascimento,
      "tipoGenero": tipoGenero,
      "email": email,
      "nrIdentificacao": nrIdentificacao,
      "nascencaPais": nascencaPais,
      "nacionalidadePais": nacionalidadePais,
      "telefone": telefone,
      "concelhoResidencia": concelhoResidencia,
    }
    console.log(body);
    return this.httpClient.post(this.Url, body).pipe(map(this.extractData));
  }




  updatePessoa(nrId:number,nome:string,dataNascimento:string,tipoGenero:string,email:string,nrIdentificacao:string,nascencaPais:string,nacionalidadePais:string,telefone:string,concelhoResidencia:string): Observable<any> {
    const body = {
      "nome": nome,
      "dataNascimento": dataNascimento,
      "tipoGenero": tipoGenero,
      "email": email,
      "nrIdentificacao": nrIdentificacao,
      "nascencaPais": nascencaPais,
      "nacionalidadePais": nacionalidadePais,
      "telefone": telefone,
      "concelhoResidencia": concelhoResidencia,
    }
    console.log(body);
    return this.httpClient.put(this.Url + 'ByIdentifier' + nrId, body).pipe(map(this.extractData));
  }




  public extractData(res: any) {
    return res || {};
  }
}
