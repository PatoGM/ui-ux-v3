import { Custom_String_Behavior_Subject } from "./custom_string_behavior_subject"

export type Theme_Options = "light" | "dark"

export const Theme_Properties_List = [
  "line_font$",
  "main_blue$",
  "unlock_button_color$",
  "alarm_red_background$",
  "active_gray_background$",
  "disabled_blue$",
  "slider_background_active$",
  "slider_background_inactive$",
  "circular_button_inactive$",
  "circular_button_active$",
  "theme_background$",
  "keypad_widget_background$",
  "widget_background$",
  "header_card_background$",
  "secondary_button_background$",
  "secondary_button_border$",
  "boxed_numeric_background$",
  "boxed_numeric_border$",
  "automation_step_font$",
  "stopped_automation_font$",
  "notificationBannerText$",
  "main_font_inactive$",
  "main_font_active$",
  "sub_font$",
  "status_sub_font$",
  "keypad_font$",
  "blue_font$",
  "automation_step_default$",
  "disabled_button$",
  "disabled_icon$",
  "secondary_selected_button$",
  "secondary_selected_color$",
  "primary_selected_button$",
  "primary_selected_color$",
  "main_green$",
  "sub_green$",
  "slider_circle_default$",
  "alarm_low$",
  "alarm_high$",
  "grayish_one$",
  "grayish_two$",
  "grayish_three$",
  "graph_lines$",
  "gauge_base$",
  "red$",
  "light_red$",
  "very_light_red$",
  "white$",
  "rosebud_circle5$",
  "rosebud_circle4$",
  "rosebud_circle3$",
  "rosebud_circle2$",
  "rosebud_circle1$",
  "rosebud_circle0$",
  "rosebud_circle0_Fill$",
  "rosebud_smalltext_color$",
  "rosebud_text_color$",
  "rosebud_arrow1_color$",
  "rosebud_arrow2_color$",
  "rosebud_bad_TF_1$",
  "rosebud_bad_TF_2$",
  "rosebud_bad_TF_3$",
  "rosebud_bad_TF_4$",
  "rosebud_bad_TF_5$",
  "rosebud_good_TF_1$",
  "rosebud_good_TF_2$",
  "rosebud_good_TF_3$",
  "rosebud_good_TF_4$",
  "rosebud_good_TF_5$",
  "toggleEffect$",
  "rosebud_graduatedScale_textcolor$",
  "close_icon$",
  "menu_text_color$",
] as const

export type Theme_Properties = typeof Theme_Properties_List[number]

export type Color_Subject_Map = { [key in Theme_Properties]: Custom_String_Behavior_Subject }

export type Color_String_Map = { [key in Theme_Properties]: string }

export class Theme 
{
  Color_String_Map: Color_String_Map

  Theme_String_Name: Theme_Options

  constructor
    (
      tsn: Theme_Options,
      csm: Color_String_Map
    )
  {
    this.Theme_String_Name = tsn
    this.Color_String_Map = csm
  }
}

export const temp: [Theme_Properties, Custom_String_Behavior_Subject][] = Theme_Properties_List.map(item => { return [item, new Custom_String_Behavior_Subject()] })

let temp1: { [key: string]: Custom_String_Behavior_Subject } = {}

for (const [a, b] of temp)
{
  temp1[a] = b
}

export const temp2: { [key: string]: Custom_String_Behavior_Subject } = temp1