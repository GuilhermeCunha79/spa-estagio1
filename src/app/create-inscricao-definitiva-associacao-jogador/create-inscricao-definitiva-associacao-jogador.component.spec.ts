import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoDefinitivaAssociacaoJogadorComponent } from './create-inscricao-definitiva-associacao-jogador.component';

describe('CreateInscricaoDefinitivaAssociacaoJogadorComponent', () => {
  let component: CreateInscricaoDefinitivaAssociacaoJogadorComponent;
  let fixture: ComponentFixture<CreateInscricaoDefinitivaAssociacaoJogadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInscricaoDefinitivaAssociacaoJogadorComponent]
    });
    fixture = TestBed.createComponent(CreateInscricaoDefinitivaAssociacaoJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
