
export enum PropertyTypeEnum {
  Text = 'text',
  Number = 'number',
  Html = 'html',
  oneOf = 'oneOf',
  anyOf = 'anyOf'
}

export interface IProperty<TValue> {
  id: string;
  propertyType: PropertyTypeEnum;
  value: TValue;
  onChange: (updatedValue: TValue) => void;
}