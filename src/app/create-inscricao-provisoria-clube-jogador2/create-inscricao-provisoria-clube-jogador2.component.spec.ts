import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoProvisoriaClubeJogador2Component } from './create-inscricao-provisoria-clube-jogador2.component';

describe('CreateInscricaoProvisoriaClubeJogador2Component', () => {
  let component: CreateInscricaoProvisoriaClubeJogador2Component;
  let fixture: ComponentFixture<CreateInscricaoProvisoriaClubeJogador2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInscricaoProvisoriaClubeJogador2Component]
    });
    fixture = TestBed.createComponent(CreateInscricaoProvisoriaClubeJogador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
