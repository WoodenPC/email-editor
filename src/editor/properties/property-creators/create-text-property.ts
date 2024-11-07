import { IProperty } from "../types"
import { TextPropertyModel } from "../text-property";

type TextPropertyArgs = {
  name: string;
  value: string;
  onUpdateValue: (val: string) => void;
}

export const createTextProperty = ( args: TextPropertyArgs): IProperty<string> => {
  return new TextPropertyModel(args.name, args.value, (value) => {
    args.onUpdateValue(value)
  });
}