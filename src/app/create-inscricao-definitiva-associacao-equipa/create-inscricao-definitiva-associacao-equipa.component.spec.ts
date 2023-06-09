import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoDefinitivaAssociacaoEquipaComponent } from './create-inscricao-definitiva-associacao-equipa.component';

describe('CreateInscricaoDefinitivaAssociacaoEquipaComponent', () => {
  let component: CreateInscricaoDefinitivaAssociacaoEquipaComponent;
  let fixture: ComponentFixture<CreateInscricaoDefinitivaAssociacaoEquipaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInscricaoDefinitivaAssociacaoEquipaComponent]
    });
    fixture = TestBed.createComponent(CreateInscricaoDefinitivaAssociacaoEquipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
