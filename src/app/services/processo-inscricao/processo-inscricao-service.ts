import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProcessoInscricaoService {

  public Url = 'https://localhost:5001/api/ProcessoInscricao';

  constructor(private httpClient: HttpClient, private msgService: MessageService) {
  }

  log(message: string) {
    this.msgService.add(`Processo criado com sucesso! ${message} `)
  }

  getProcessos(): Observable<any> {
    return this.httpClient.get(this.Url).pipe(map(this.extractData))
  }

  getProcessoByCodOperacao(codOperacao: string): Observable<any> {
    return this.httpClient.get(this.Url + '/ByIdentifier/' + codOperacao).pipe(map(this.extractData));
  }

  getProcessoSByNomeAssociacao(nomeAss: string): Observable<any> {
    return this.httpClient.get(this.Url + '/ByAssociacao/' + nomeAss).pipe(map(this.extractData));
  }



  updateProcessoInscricao(codOperacao: string, tipoProcesso:string , estado : string, epocaDesportiva:string, dataRegisto:string, dataSubscricao:string): Observable<any>{
    const body= {
      "tipoProcesso": tipoProcesso,
      "estado": estado,
      "epocaDesportiva": epocaDesportiva,
      "dataRegisto": dataRegisto,
      "dataSubscricao":dataSubscricao
    }
    console.log(body);
    return this.httpClient.put(this.Url + '/CodOperacao1/' + codOperacao,body).pipe(map(this.extractData));
  }

  deleteProcessoInscricao(codOperacao: string, tipoProcesso:string , estado : string, epocaDesportiva:string, dataRegisto:string, dataSubscricao:string): Observable<any>{
    const body= {
      "tipoProcesso": tipoProcesso,
      "estado": estado,
      "epocaDesportiva": epocaDesportiva,
      "dataRegisto": dataRegisto,
      "dataSubscricao":dataSubscricao
    }
    console.log(body);
    return this.httpClient.delete(this.Url + codOperacao + '/hard').pipe(map(this.extractData));
  }



  public extractData(res: any) {
    return res || {};
  }

  listTable(): void {

    let tbody = document.getElementById('tbody') as HTMLTableElement;

    let array = this.getProcessos();
    console.log(array);

    array.forEach(function (i) {


      console.log(i.length)

      for (let j = 0; j < i.length; j++) {
        let tr = tbody.insertRow();

        let td_tipoProc = tr.insertCell();
        let td_estado = tr.insertCell();
        let td_epocaDesp = tr.insertCell();
        let td_dataRegisto = tr.insertCell();
        let td_dataSub = tr.insertCell();



        td_tipoProc.innerText = i[j].tipoProcesso;
        td_estado.innerText = i[j].estado;
        td_epocaDesp.innerText = i[j].epocaDesportiva;
        td_dataRegisto.innerText = i[j].dataRegisto;
        td_dataSub.innerText = i[j].dataSubscricao;

      }
    });
  }


}
