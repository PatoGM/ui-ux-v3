import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from "./components/header/header.component"
import { FooterComponent } from "./components/footer/footer.component"
import { CentralContentComponent } from "./components/central-content/central-content.component"
import { Smart_ROS_All_Colors } from './types_and_objects/colors/colors'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CentralContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent
{
  title = 'ui-ux-v3';

  constructor()
  {

  }

  main_color: string = Smart_ROS_All_Colors.Strong_Blue
}
