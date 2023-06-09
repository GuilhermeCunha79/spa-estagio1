import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscricaoProvisoriaClubeEquipaComponent } from './create-inscricao-provisoria-clube-equipa.component';

describe('CreateInscricaoProvisoriaClubeEquipaComponent', () => {
  let component: CreateInscricaoProvisoriaClubeEquipaComponent;
  let fixture: ComponentFixture<CreateInscricaoProvisoriaClubeEquipaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInscricaoProvisoriaClubeEquipaComponent]
    });
    fixture = TestBed.createComponent(CreateInscricaoProvisoriaClubeEquipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
