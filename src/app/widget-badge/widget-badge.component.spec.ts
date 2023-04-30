import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBadgeComponent } from './widget-badge.component';

describe('WidgetBadgeComponent', () => {
  let component: WidgetBadgeComponent;
  let fixture: ComponentFixture<WidgetBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
