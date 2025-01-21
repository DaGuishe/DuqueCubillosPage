import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagcitaComponent } from './pagcita.component';

describe('PagcitaComponent', () => {
  let component: PagcitaComponent;
  let fixture: ComponentFixture<PagcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagcitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
