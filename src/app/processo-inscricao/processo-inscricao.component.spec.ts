import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoInscricaoComponent } from './processo-inscricao.component';

describe('ProcessoInscricaoComponent', () => {
  let component: ProcessoInscricaoComponent;
  let fixture: ComponentFixture<ProcessoInscricaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoInscricaoComponent]
    });
    fixture = TestBed.createComponent(ProcessoInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
