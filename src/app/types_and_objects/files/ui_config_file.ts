import { BehaviorSubject, firstValueFrom } from "rxjs"
import { SignalService } from "../../services/signal.service"

export type File_States = "unloaded" | "loading" | "loaded"

export type Provider = {Get: (path: string) => Promise<unknown>}

export class UI_Config_File<T>
{
  Description: string
  File_Location: string
  File_Name: string

  Raw_File_Object?: T
  Raw_File_Object_Obs$ = new BehaviorSubject<T | undefined>(this.Raw_File_Object)

  Time_Last_Loaded: Number = NaN

  Provider: Provider

  Status: File_States = 'unloaded'
  Status_Obs$ = new BehaviorSubject<File_States>(this.Status)

  async Load_File_From_Provider()
  {
    this.Status = "loading"
    this.Status_Obs$.next(this.Status)
    
    let path = this.File_Location + "/" + this.File_Name
    
    let response = await this.Provider.Get(path)

    this.Raw_File_Object = response as T

    this.Time_Last_Loaded = new Date().getTime()
    this.Raw_File_Object_Obs$.next(this.Raw_File_Object)

    this.Status = "loaded"
    this.Status_Obs$.next(this.Status)
  }

  constructor(description: string, fl: string, fn: string, provider: Provider, signal_service: SignalService)
  {
    this.Description = description
    this.File_Location = fl
    this.File_Name = fn
    this.Provider = provider
    // signal_service.application_initialization["Automatically request to get runtime config"].next(null)
    this.Load_File_From_Provider()
  }
}