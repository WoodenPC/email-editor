import { PropertyGroupModel } from "../property-group";
import { IPropertyGroup, IPropertyItem } from "../types";

export const isPropertyGroup = (propertyItem: IPropertyItem): propertyItem is IPropertyGroup => {
  return propertyItem instanceof PropertyGroupModel;
}