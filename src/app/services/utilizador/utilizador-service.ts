import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UtilizadorService {

  public Url = 'https://localhost:5001/api/Utilizador';

  constructor(private httpClient: HttpClient, private msgService: MessageService,private router:Router) {
  }

  log(message: string) {
    this.msgService.add(`Utilizador criado com sucesso! ${message} `)
  }

  getUtilizadores():Observable<any>{
    return this.httpClient.get(this.Url).pipe(map(this.extractData))
  }

  createUtilizadorAssociacaoValid(emailUtilizador:string,role:number,password:string,nomeAssociacao:string){
    const body= {
      "emailUtilizador": emailUtilizador,
      "role": role,
      "password": password,
      "nomeAssociacao": nomeAssociacao
    }
    return this.httpClient.post(this.Url,body).pipe(map(this.extractData))
  }

  createUtilizadorClubeValid(emailUtilizador:string,role:number,password:string,codigoClube:number){
    const body= {
      "emailUtilizador": emailUtilizador,
      "role": role,
      "password": password,
      "codigoClube": codigoClube
    }
    return this.httpClient.post(this.Url,body).pipe(map(this.extractData))
  }

  updateUtilizadorAssociacao(emailUtilizador:string,role:number,password:string,nomeAssociacao:string){
    const body= {
      "emailUtilizador": emailUtilizador,
      "role": role,
      "password": password,
      "nomeAssociacao": nomeAssociacao
    }
    console.log(body);
    return this.httpClient.put(this.Url + 'ByIdentifier'+ emailUtilizador,body).pipe(map(this.extractData))
  }

  updateUtilizadorClube(emailUtilizador:string,role:number,password:string,codigoClube:number){
    const body= {
      "emailUtilizador": emailUtilizador,
      "role": role,
      "password": password,
      "codigoClube": codigoClube
    }
    return this.httpClient.post(this.Url+ 'ByIdentifier'+ emailUtilizador,body).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }

  checkPermission(permissions: number[]): void {

    const token = JSON.parse(sessionStorage.getItem("user-data")!);

    if (token) {
      if (!permissions.includes(token.role)){
        this.redirect("/home");
      }
    }
  }
  redirect(url: string): void {
    this.router.navigate([url]).then();
  }

  redirectToLogin(): void {
    if (!sessionStorage.getItem("user-data")) {
      this.redirect('/login');
    }
  }

  cancelUser1(email: string, firstName: string, lastName: string, phoneNumber: string, role: number): Observable<any> {
    const body = {
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "phoneNumber": phoneNumber,
      "role": role,
    };
    console.log(body);
    return this.httpClient.put(this.Url, body).pipe(map(this.extractData));
  }

}
