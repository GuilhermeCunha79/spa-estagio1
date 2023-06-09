import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoProvisoriaClubeJogadorComponent } from './create-inscricao-provisoria-clube-jogador.component';

describe('CreateInscricaoProvisoriaClubeJogadorComponent', () => {
  let component: CreateInscricaoProvisoriaClubeJogadorComponent;
  let fixture: ComponentFixture<CreateInscricaoProvisoriaClubeJogadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInscricaoProvisoriaClubeJogadorComponent]
    });
    fixture = TestBed.createComponent(CreateInscricaoProvisoriaClubeJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
