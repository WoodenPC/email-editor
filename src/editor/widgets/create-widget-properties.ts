import { IProperty } from "../properties/types";
import { TextWidgetModel, createTextWidgetProperties } from "./text-widget";
import { IWidgetModel, WidgetTypeEnum } from "./types";

export const createWidgetProperties = (widgetModel: IWidgetModel): IProperty<any>[] => {
  switch(widgetModel.widgetType) {
    case WidgetTypeEnum.Text:
      return createTextWidgetProperties(widgetModel as TextWidgetModel);
    default:
      return []
  }
}