import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CymbalsComponent } from './cymbals.component';

describe('CymbalsComponent', () => {
  let component: CymbalsComponent;
  let fixture: ComponentFixture<CymbalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CymbalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CymbalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
