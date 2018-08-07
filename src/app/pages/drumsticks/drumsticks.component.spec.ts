import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumsticksComponent } from './drumsticks.component';

describe('DrumsticksComponent', () => {
  let component: DrumsticksComponent;
  let fixture: ComponentFixture<DrumsticksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumsticksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumsticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
