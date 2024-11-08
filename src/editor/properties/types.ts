
export enum PropertyTypeEnum {
  Base = 'base',
  Text = 'text',
  Number = 'number',
  Html = 'html',
  oneOf = 'oneOf',
  anyOf = 'anyOf'
}

// интерфейс модели проперти (observable)
export interface IProperty<TValue> {
  id: string;
  name: string;
  propertyType: PropertyTypeEnum;
  value: TValue;
  updateValue: (updatedValue: TValue) => void;
}

export interface IPropertyGroup {
  id: string;
  title: string;
  properties: IProperty<any>[];
}

export type IPropertyItem = IProperty<any> | IPropertyGroup;

export type ITextProperty = IProperty<string>;