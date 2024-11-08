import { IPropertyItem } from "../properties/types";
import { TextWidgetModel, createTextWidgetProperties } from "./text-widget";
import { IWidgetModel, WidgetTypeEnum } from "./types";

export const createWidgetPropertyItems = (widgetModel: IWidgetModel): IPropertyItem[] => {
  switch(widgetModel.widgetType) {
    case WidgetTypeEnum.Text:
      return createTextWidgetProperties(widgetModel as TextWidgetModel);
    default:
      return []
  }
}