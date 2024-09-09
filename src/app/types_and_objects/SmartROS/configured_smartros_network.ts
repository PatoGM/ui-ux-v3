export interface Configured_SmartROS_Network
{
  Data_Server_MQTT_Broker:
  {
    WS:
    {
      URL: string
    }
  }

  ROS_Automation:
  {
    WS:
    {
      URL: string
    }
  }

  Recipe_Manager:
  {
    WS:
    {
      URL: string
    }

    HTTP:
    {
      Source_URL: string

      Recipes_URL: string

      Root_URL: string
    }
  }

  UI_Widgets:
  {
    HTTP:
    {
      URL: string
    }
  }

  Rig_Config:
  {
    HTTP:
    {
      URL: string
    }
  }

  App_Config:
  {
    HTTP:
    {
      URL: string
    }
  }
}