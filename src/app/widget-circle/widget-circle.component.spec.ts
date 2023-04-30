import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCircleComponent } from './widget-circle.component';

describe('WidgetCircleComponent', () => {
  let component: WidgetCircleComponent;
  let fixture: ComponentFixture<WidgetCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
