import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Runtime_Config } from '../types_and_objects/runtime-config/runtime_config'

@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService
{
  private config?: Runtime_Config

  public config_obs$ = new BehaviorSubject<Runtime_Config | undefined>(this.config)

  update_config(config_file: unknown)
  {
    if (config_file === undefined) return

    // https://stackoverflow.com/questions/56121589/typescript-check-an-object-has-all-interface-properties
    const isMyDocument = (input: any): input is Runtime_Config =>
    {
      const schema: Record<keyof Runtime_Config, "number" | "boolean" | "string" | "object"> = {
        Allow_Local_Network_Writes: "boolean",
        Allow_Remote_Network_Writes: "boolean",
        Stand_Alone_Mode: "boolean",
        Description: "string",
        Default_Global_PLC_Tag_Read_Rate_ms: "number",
        Show_Wrench: "boolean",
        is_4_5_4: "boolean",
        SmartDrill_Sequence_Name: "string",
        SmartSlide_Sequence_Name: "string",
        Third_Party_Screens_Config: "object",
        Data_Server_MQTT_Broker_Topics: "object",
        Network: "object",
        Clients: "object",
        Remote_Services: "object",
        Max_Extensions: "number",
        Extension_Time_s: "number",
        Login_Duration_s: "number",
        Delay_Rate_ms: "number",
        Delay_Sectors: "number",
      }

      const missingProperties = Object.keys(schema)
        .filter(key => input[key] === undefined)
        .map(key => key as keyof Runtime_Config)
        .map(key => new Error(`Runtime Config is missing ${key} ${schema[key]}`))

      // throw the errors if you choose

      for (const item of missingProperties)
      {
        console.error(item.name + " : " + item.message)
      }

      return missingProperties.length === 0
    }

    if (isMyDocument(config_file))
    {
      this.config = config_file
      this.config_obs$.next(this.config)
    }
    else
    {
      console.error("Runtime config file is missing entries, file was not loaded successfully")
    }
  }

  constructor(){}
}
