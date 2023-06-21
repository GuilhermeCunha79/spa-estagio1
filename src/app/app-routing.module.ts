import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from "./default-layout/default-layout.component";
import {
  CreateInscricaoProvisoriaClubeJogadorComponent
} from "./create-inscricao-provisoria-clube-jogador/create-inscricao-provisoria-clube-jogador.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ProcessoInscricaoComponent} from "./processo-inscricao/processo-inscricao.component";
import {Dialog} from "./Dialog/dialog.component";
import {PageLoginComponent} from "./page-login/page-login.component";
import {
  CreateInscricaoProvisoriaClubeJogador1Component
} from "./create-inscricao-provisoria-clube-jogador1/create-inscricao-provisoria-clube-jogador1.component";
import {
  CreateInscricaoProvisoriaClubeJogador2Component
} from "./create-inscricao-provisoria-clube-jogador2/create-inscricao-provisoria-clube-jogador2.component";
import {
  CreateInscricaoProvisoriaClubeJogador3Component
} from "./create-inscricao-provisoria-clube-jogador3/create-inscricao-provisoria-clube-jogador3.component";
import {ConsultarJogadorComponent} from "./consultar-jogador/consultar-jogador.component";
import {ProcessoInscricao1Component} from "./processo-inscricao1/processo-inscricao1.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'login', component: PageLoginComponent},

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {path: 'home', component: HomepageComponent},
      {path: 'inscricaoProvisoriaClubeJogador', component: CreateInscricaoProvisoriaClubeJogadorComponent},
      {path: 'inscricaoProvisoriaClubeJogador1', component: CreateInscricaoProvisoriaClubeJogador1Component},
      {path: 'inscricaoProvisoriaClubeJogador2', component: CreateInscricaoProvisoriaClubeJogador2Component},
      {path: 'inscricaoProvisoriaClubeJogador3', component: CreateInscricaoProvisoriaClubeJogador3Component},
      {path: 'processoInscricao', component: ProcessoInscricaoComponent},
      {path: 'detalheProcesso', component: ProcessoInscricao1Component},
      {path: 'dialogo', component: Dialog},
      {path: 'consultarJogador', component: ConsultarJogadorComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
