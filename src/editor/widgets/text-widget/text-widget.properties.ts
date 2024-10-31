import { IProperty } from "@/editor/properties/types";
import { TextWidgetModel } from "./text-widget.model";
import { createTextProperty } from "@/editor/properties/text-property";

export const createTextWidgetProperties = (model: TextWidgetModel): IProperty<any>[] => {
  return [
    createTextProperty({
      value: model.value,
      onChange: (val) => {
        model.value = val;
      }
    })
  ]
}