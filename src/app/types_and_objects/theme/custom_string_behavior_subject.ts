import { BehaviorSubject } from "rxjs"

// Generic orange color
export const DEBUG = "#FFA500"

export class Custom_String_Behavior_Subject extends BehaviorSubject<string>
{
  // SS: ScreenService

  constructor()
  {
    super(DEBUG)

    // this.SS = inject(ScreenService)
  }

  override subscribe(func: ((value: string) => void))
  {
    let sub = super.subscribe(func)

    // this.SS.Subscriptions_To_Ensure_Are_Cleaned_On_Route_Change.push(sub)

    return sub
  }
}