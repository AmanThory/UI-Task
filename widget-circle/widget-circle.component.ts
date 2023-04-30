import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-circle',
  templateUrl: './widget-circle.component.html',
  styleUrls: ['./widget-circle.component.css']
})
export class WidgetCircleComponent {
  @Input() heading:string = ''
  @Input() isCelsiusExist:boolean = true
  @Input() mainDegreeValue:string = ''
  @Input() mainDegreeBgColor:string = ''

  @Input() upDegreeValue:string = ''
  @Input() upDegreeIcon:string = ''
  
  @Input() downDegreeValue:string = ''
  @Input() downDegreeIcon:string = ''

  src = "../../assets/"


}
