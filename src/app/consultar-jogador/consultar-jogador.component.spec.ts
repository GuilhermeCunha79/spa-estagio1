import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarJogadorComponent } from './consultar-jogador.component';

describe('ConsultarJogadorComponent', () => {
  let component: ConsultarJogadorComponent;
  let fixture: ComponentFixture<ConsultarJogadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarJogadorComponent]
    });
    fixture = TestBed.createComponent(ConsultarJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
