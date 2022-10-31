import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySectionTwoComponent } from './body-section-two.component';

describe('BodySectionTwoComponent', () => {
  let component: BodySectionTwoComponent;
  let fixture: ComponentFixture<BodySectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
