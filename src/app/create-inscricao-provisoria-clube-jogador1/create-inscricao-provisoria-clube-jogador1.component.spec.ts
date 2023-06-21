import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoProvisoriaClubeJogador1Component } from './create-inscricao-provisoria-clube-jogador1.component';

describe('CreateInscricaoProvisoriaClubeJogador1Component', () => {
  let component: CreateInscricaoProvisoriaClubeJogador1Component;
  let fixture: ComponentFixture<CreateInscricaoProvisoriaClubeJogador1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInscricaoProvisoriaClubeJogador1Component]
    });
    fixture = TestBed.createComponent(CreateInscricaoProvisoriaClubeJogador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
