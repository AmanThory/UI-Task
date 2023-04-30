import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDisplaysComponent } from './widget-displays.component';

describe('WidgetDisplaysComponent', () => {
  let component: WidgetDisplaysComponent;
  let fixture: ComponentFixture<WidgetDisplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetDisplaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetDisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
