import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetBadgeComponent } from './widget-badge/widget-badge.component';
import { WidgetCircleComponent } from './widget-circle/widget-circle.component';
import { WidgetDisplaysComponent } from './widget-displays/widget-displays.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetBadgeComponent,
    WidgetCircleComponent,
    WidgetDisplaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
