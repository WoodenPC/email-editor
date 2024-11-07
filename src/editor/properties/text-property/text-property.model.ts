import { makeAutoObservable } from "mobx";
import { IProperty, PropertyTypeEnum } from "../types";
import { nanoid } from "nanoid";

export class TextPropertyModel implements IProperty<string> {
  private readonly changeCb: (val: string) => void;
  id: string;
  value: string;
  readonly name: string;
  readonly propertyType: PropertyTypeEnum;
  
  constructor(name: string, value: string, changeCb: (val: string) => void) {
    this.id = nanoid();
    this.value = value;
    this.changeCb = changeCb;
    this.propertyType = PropertyTypeEnum.Text;
    this.name = name;

    makeAutoObservable(this);
  }

  updateValue(val: string) {
    this.value = val;
    this.changeCb(val);
  }

}