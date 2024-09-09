import { Component, HostListener, Input } from '@angular/core'
import { ThemeService } from '../../services/theme.service'

@Component({
  selector: 'app-base-widget',
  standalone: true,
  imports: [],
  templateUrl: './base-widget.component.html',
  styleUrl: './base-widget.component.scss'
})
export class BaseWidgetComponent
{
  @HostListener('window:pointerup', ['$event'])
  pointer_up(event: PointerEvent)
  {
    this.pointer_down = false
  }

  @HostListener('window:pointermove', ['$event'])
  pointer_move(event: PointerEvent)
  {
    this.move(event)
  }

  @Input() title: string = "title"

  @Input() Left_X: number = 960
  @Input() Top_Y: number = 540
  @Input() Width: number = 100
  @Input() Height: number = 100
  @Input() Padding: number = 0
  @Input() Z_Index: number = 0
  @Input() Background_Color: string = "gray"
  @Input() Corner_Radius: number = 25

  constructor()
  {
  }

  log(evt: Event)
  {
    console.log(evt)
  }

  pointer_down: boolean = false

  down(evt: Event)
  {
    this.pointer_down = true
  }

  up(evt: Event)
  {
    this.pointer_down = false
  }

  move(evt: PointerEvent)
  {
    if (!this.pointer_down) return

    this.Left_X = Math.ceil((evt.clientX - this.Width / 2) / 20) * 20
    this.Top_Y = Math.ceil((evt.clientY - this.Height / 2) / 20) * 20
  }
}
