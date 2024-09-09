import { Unconfigured_SmartROS_Network } from "./unconfigured_smartros_network"

export interface Extended_SmartROS_Network
{
  HMI: Unconfigured_SmartROS_Network
  
  Local: Unconfigured_SmartROS_Network

  Remote: Unconfigured_SmartROS_Network

  Develop: Unconfigured_SmartROS_Network

  Valid_Local_Network_Host_Names: string[]
}