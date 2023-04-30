import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-badge',
  templateUrl: './widget-badge.component.html',
  styleUrls: ['./widget-badge.component.css']
})
export class WidgetBadgeComponent {

  @Input() heading:string = ''
  @Input() badge:string = ''
  @Input() label:string = ''
  @Input() totalValue:string = ''
  @Input() opacity:string = ''


}
