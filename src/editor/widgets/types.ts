export enum WidgetTypeEnum {
  Text = 'text'
}

export enum WidgetFieldTypeEnum {
  String = 'string',
  Number = 'number',
  Html = 'html',
  Select = 'select',
  Checkbox = 'checkbox'
}

export interface IWidgetFieldSelectMeta {
  oneOf: string[];
}

export interface IWdgetFieldCheckboxMeta {
  anyOf: string[];
}

// интерфейс модели виджета (observable)
export interface IWidgetModel {
  id: string;
  widgetType: WidgetTypeEnum;
}