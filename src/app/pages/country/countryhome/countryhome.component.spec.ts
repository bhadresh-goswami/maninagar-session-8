import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryhomeComponent } from './countryhome.component';

describe('CountryhomeComponent', () => {
  let component: CountryhomeComponent;
  let fixture: ComponentFixture<CountryhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
