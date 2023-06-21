import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoInscricao1Component } from './processo-inscricao1.component';

describe('ProcessoInscricao1Component', () => {
  let component: ProcessoInscricao1Component;
  let fixture: ComponentFixture<ProcessoInscricao1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoInscricao1Component]
    });
    fixture = TestBed.createComponent(ProcessoInscricao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
