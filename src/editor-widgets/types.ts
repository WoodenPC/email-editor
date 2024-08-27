export type BaseWidgetModel = {
  version: string;
}

export type EditorWidgetType = 'text' | 'image' | 'button';
export type WidgetDataModel = {
  createSchema: () => unknown;
}