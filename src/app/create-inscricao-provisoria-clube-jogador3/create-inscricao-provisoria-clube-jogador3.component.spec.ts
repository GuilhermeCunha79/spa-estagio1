import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoProvisoriaClubeJogador3Component } from './create-inscricao-provisoria-clube-jogador3.component';

describe('CreateInscricaoProvisoriaClubeJogador3Component', () => {
  let component: CreateInscricaoProvisoriaClubeJogador3Component;
  let fixture: ComponentFixture<CreateInscricaoProvisoriaClubeJogador3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInscricaoProvisoriaClubeJogador3Component]
    });
    fixture = TestBed.createComponent(CreateInscricaoProvisoriaClubeJogador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
