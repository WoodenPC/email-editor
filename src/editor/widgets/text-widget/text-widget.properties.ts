import { IProperty } from "@/editor/properties/types";
import { TextWidgetModel } from "./text-widget.model";
import { propertyCreators } from "@/editor/properties/property-creators";

export const createTextWidgetProperties = (model: TextWidgetModel): IProperty<any>[] => {
  return [
    propertyCreators.createTextProperty({
      value: model.value,
      onChange: (val) => {
        model.value = val;
      }
    })
  ]
}