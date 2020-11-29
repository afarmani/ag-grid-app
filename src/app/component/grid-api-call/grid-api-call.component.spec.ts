import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridApiCallComponent } from './grid-api-call.component';

describe('GridApiCallComponent', () => {
  let component: GridApiCallComponent;
  let fixture: ComponentFixture<GridApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridApiCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
