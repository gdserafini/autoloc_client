import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarsRentalComponent } from './list-cars-rental.component';

describe('ListCarsRentalComponent', () => {
  let component: ListCarsRentalComponent;
  let fixture: ComponentFixture<ListCarsRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCarsRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCarsRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
