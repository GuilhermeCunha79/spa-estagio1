import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

import { CreateInscricaoProvisoriaClubeJogadorComponent } from './create-inscricao-provisoria-clube-jogador/create-inscricao-provisoria-clube-jogador.component';
import { CreateInscricaoProvisoriaClubeEquipaComponent } from './create-inscricao-provisoria-clube-equipa/create-inscricao-provisoria-clube-equipa.component';
import { CreateInscricaoDefinitivaAssociacaoEquipaComponent } from './create-inscricao-definitiva-associacao-equipa/create-inscricao-definitiva-associacao-equipa.component';
import { CreateInscricaoDefinitivaAssociacaoJogadorComponent } from './create-inscricao-definitiva-associacao-jogador/create-inscricao-definitiva-associacao-jogador.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { ProcessoInscricaoComponent } from './processo-inscricao/processo-inscricao.component';
import {Dialog} from "./Dialog/dialog.component";
import {DialogContentExampleDialog} from "./dialog-example/dialog-example.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MaterialModule} from "./material/material.module";
import {MatIconModule} from "@angular/material/icon";
import {MessagesComponent} from "./messages/messages.component";
import {PessoaService} from "./services/pessoa/pessoa-service";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { PageLoginComponent } from './page-login/page-login.component';
import {MatRadioModule} from "@angular/material/radio";
import { NacionalidadeComponent } from './nacionalidade/nacionalidade.component';
import { PaisNascencaComponent } from './pais-nascenca/pais-nascenca.component';
import {NgxPaginationModule} from "ngx-pagination";
import { CreateInscricaoProvisoriaClubeJogador1Component } from './create-inscricao-provisoria-clube-jogador1/create-inscricao-provisoria-clube-jogador1.component';
import { SharedServiceComponent } from './shared-service/shared-service.component';
import { CreateInscricaoProvisoriaClubeJogador2Component } from './create-inscricao-provisoria-clube-jogador2/create-inscricao-provisoria-clube-jogador2.component';
import { CreateInscricaoProvisoriaClubeJogador3Component } from './create-inscricao-provisoria-clube-jogador3/create-inscricao-provisoria-clube-jogador3.component';
import {SocialLoginModule} from "@abacritt/angularx-social-login";
import {NgxSpinnerModule} from "ngx-spinner";






@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    MatDialogModule,
    MatToolbarModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    NgxPaginationModule,
    SocialLoginModule,
    NgxSpinnerModule
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HomepageComponent,
    MessagesComponent,
    Dialog,
    CreateInscricaoProvisoriaClubeJogadorComponent,
    CreateInscricaoProvisoriaClubeEquipaComponent,
    CreateInscricaoDefinitivaAssociacaoEquipaComponent,
    CreateInscricaoDefinitivaAssociacaoJogadorComponent,
    ProcessoInscricaoComponent,
    DialogContentExampleDialog,
    PageLoginComponent,
    NacionalidadeComponent,
    PaisNascencaComponent,
    CreateInscricaoProvisoriaClubeJogador1Component,
    SharedServiceComponent,
    CreateInscricaoProvisoriaClubeJogador2Component,
    CreateInscricaoProvisoriaClubeJogador3Component
  ],

  providers: [PessoaService,{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },SharedServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
