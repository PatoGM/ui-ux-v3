import { Component } from '@angular/core'
import { BaseWidgetComponent } from '../base-widget/base-widget.component'
import { NgComponentOutlet } from '@angular/common'

@Component({
  selector: 'app-central-content',
  standalone: true,
  imports: [BaseWidgetComponent, NgComponentOutlet],
  templateUrl: './central-content.component.html',
  styleUrl: './central-content.component.scss'
})
export class CentralContentComponent
{
  items: { component: any, inputs: Record<string, unknown> }[] = [
    { component: BaseWidgetComponent, inputs: {title: "1", Background_Color: "red", Z_Index: 2} },
    { component: BaseWidgetComponent, inputs: {title: "2", Background_Color: "blue", Z_Index: 1} }
  ]

  current = BaseWidgetComponent
}
