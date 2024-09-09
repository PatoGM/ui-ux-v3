import { Reuse_Options } from "../runtime-config/runtime_config"
import { Configured_SmartROS_Network } from "./configured_smartros_network"

export interface Unconfigured_SmartROS_Network extends Configured_SmartROS_Network
{
  Data_Server_MQTT_Broker:
  {
    WS:
    {
      URL: string
      Reuse_Base: Reuse_Options
    }
  }

  ROS_Automation:
  {
    WS:
    {
      URL: string
      Reuse_Base: Reuse_Options
    }
  }

  Recipe_Manager:
  {
    WS:
    {
      URL: string
      Reuse_Base: Reuse_Options
    }

    HTTP:
    {
      Source_URL: string
      Source_Reuse_Base: Reuse_Options

      Recipes_URL: string
      Recipes_Reuse_Base: Reuse_Options

      Root_URL: string
      Root_Reuse_Base: Reuse_Options
    }
  }

  UI_Widgets:
  {
    HTTP:
    {
      URL: string
      Reuse_Base: Reuse_Options
    }
  }

  Rig_Config:
  {
    HTTP:
    {
      URL: string
      Reuse_Base: Reuse_Options
    }
  }

  App_Config:
  {
    HTTP:
    {
      URL: string
      Reuse_Base: Reuse_Options
    }
  }
}