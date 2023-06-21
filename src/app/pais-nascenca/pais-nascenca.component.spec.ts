import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisNascencaComponent } from './pais-nascenca.component';

describe('PaisNascencaComponent', () => {
  let component: PaisNascencaComponent;
  let fixture: ComponentFixture<PaisNascencaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisNascencaComponent]
    });
    fixture = TestBed.createComponent(PaisNascencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
