import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampexpComponent } from './campexp.component';

describe('CampexpComponent', () => {
  let component: CampexpComponent;
  let fixture: ComponentFixture<CampexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampexpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
