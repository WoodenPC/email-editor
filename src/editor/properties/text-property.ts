import { nanoid } from "nanoid"
import { IProperty, PropertyTypeEnum } from "./types"
import { makeAutoObservable } from "mobx"

type TextPropertyArgs = {
  value: string;
  onChange: (val: string) => void;
}

export const createTextProperty = (args: TextPropertyArgs): IProperty<string> => {
  const property: IProperty<string> = {
    id: nanoid(),
    propertyType: PropertyTypeEnum.Text,
    value: args.value,
    onChange: (val: string) => args.onChange(val)
  }

  makeAutoObservable(property);

  return property;
}