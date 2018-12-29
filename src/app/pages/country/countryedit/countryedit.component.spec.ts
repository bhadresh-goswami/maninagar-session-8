import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryeditComponent } from './countryedit.component';

describe('CountryeditComponent', () => {
  let component: CountryeditComponent;
  let fixture: ComponentFixture<CountryeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
