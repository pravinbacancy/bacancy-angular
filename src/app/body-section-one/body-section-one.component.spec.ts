import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySectionOneComponent } from './body-section-one.component';

describe('BodySectionOneComponent', () => {
  let component: BodySectionOneComponent;
  let fixture: ComponentFixture<BodySectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
