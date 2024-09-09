import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Theme_Options } from '../types_and_objects/theme/theme'

@Injectable({
  providedIn: 'root'
})
export class ThemeService
{
  constructor() { }

  private Current_Theme_String_Name: Theme_Options = 'dark'

  public Current_Theme_String_Name_Obs$ = new BehaviorSubject<Theme_Options>(this.Current_Theme_String_Name)
}
