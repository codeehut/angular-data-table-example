import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHeadersComponent } from './data-headers.component';

describe('DataHeadersComponent', () => {
  let component: DataHeadersComponent;
  let fixture: ComponentFixture<DataHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
