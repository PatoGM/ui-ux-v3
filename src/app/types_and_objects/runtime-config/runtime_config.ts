import { Data_Server_MQTT_Broker_Map } from "../MQTT/data_server_mqtt_broker_map"
import { Extended_SmartROS_Network } from "../SmartROS/extended_smartros_network"



export type Common_Modes = "Debug" | "File" | "Unknown" | "None"

export type Data_Server_MQTT_Broker_Modes = "MQTT via WS" | "Other WS" | Common_Modes
export type ROS_Automation_Mode = "WS" | "Other WS" | Common_Modes
export type Recipe_Manager_Mode = "WS + HTTP" | "Other WS + HTTP" | Common_Modes

export type Reuse_Options = "none" | "hostname" | "hostname and port"

export interface Runtime_Config
{
  Delay_Sectors: number
  Delay_Rate_ms: number

  Max_Extensions: number
  Extension_Time_s: number 
  Login_Duration_s: number

  Allow_Local_Network_Writes: boolean
  Allow_Remote_Network_Writes: boolean

  Stand_Alone_Mode: boolean
  
  Show_Wrench: boolean

  is_4_5_4: boolean,

  Description: string

  SmartDrill_Sequence_Name: string
  SmartSlide_Sequence_Name: string

  Default_Global_PLC_Tag_Read_Rate_ms: number

  Clients:
  {
    MQTT:
    {
      Enabled: boolean
      Heartbeat_Rate_ms: number
      Timeout_ms: number
    }

    WS:
    {
      Enabled: boolean
      Heartbeat_Rate_ms: number
      Timeout_ms: number
    }

    HTTP:
    {
      Enabled: boolean
      Heartbeat_Rate_ms: number
      Timeout_ms: number
    }
  }

  Remote_Services:
  {
    Data_Server_MQTT_Broker: 
    {
      Mode: Data_Server_MQTT_Broker_Modes
      Timeout_ms: number
    }

    ROS_Automation: 
    {
      Mode: ROS_Automation_Mode
      Timeout_ms: number
    }

    Recipe_Manager: 
    {
      Mode: Recipe_Manager_Mode
      Timeout_ms: number
    }
  }

  Network: Extended_SmartROS_Network,

  Data_Server_MQTT_Broker_Topics: Data_Server_MQTT_Broker_Map<string>

  Third_Party_Screens_Config:
  {
    Name: string
    Group: string
    Desired_Navigation_URL: string
    Root_Module_Name: string
    Root_Component_Name: string
    Routes_Module_Name: string
    Routes_Object_Name: string
    HMI:
    {
      HTTP:
      {
        URL: string
        Reuse_Base: Reuse_Options
      }
    }
    Remote:
    {
      HTTP:
      {
        URL: string
        Reuse_Base: Reuse_Options
      }
    }
    Local:
    {
      HTTP:
      {
        URL: string
        Reuse_Base: Reuse_Options
      }
    }
    Develop:
    {
      HTTP:
      {
        URL: string
        Reuse_Base: Reuse_Options
      }
    }
  }[]
}