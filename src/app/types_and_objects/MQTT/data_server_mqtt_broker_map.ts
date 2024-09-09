export interface Data_Server_MQTT_Broker_Map<T = any>
{
  Global:
  {
    Data_Server:
    {
      Connection_Result: T
      Diagnostic: T
    },

    UI:
    {
      Connect: T
      Disconnect: T
    },

    Alarm_Server:
    {
      All_Activated_Alarms: T
      Acknowledge_Alarms: T
    }
  }

  Unique:
  {
    Data_Server:
    {
      Read_Result: T
      Write_Result: T
      Validation_Result: T

      Diagnostic: T

      Connection_Status: T

      Request_Error: T
    }

    UI:
    {
      Read: T
      Write: T
      Validate: T

      Diagnostic: T

      Cancel_Read: T
    }
  }
}