
export enum PropertyTypeEnum {
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

export type ITextProperty = IProperty<string>;