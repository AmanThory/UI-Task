import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-displays',
  templateUrl: './widget-displays.component.html',
  styleUrls: ['./widget-displays.component.css']
})
export class WidgetDisplaysComponent {
  @Input() heading:string = ''
  @Input() badge:string = ''
  @Input() label:string = ''
  @Input() totalValue:string = ''

}
