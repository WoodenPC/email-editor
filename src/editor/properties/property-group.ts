import { nanoid } from "nanoid";
import { IProperty, IPropertyGroup } from "./types";

export class PropertyGroupModel implements IPropertyGroup {
  id: string;
  title: string;
  properties: IProperty<any>[];


  constructor(title: string, properties: IProperty<any>[]) {
    this.title = title;
    this.properties = properties;
    this.id = nanoid();
  }
}