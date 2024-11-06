import { makeAutoObservable } from "mobx";
import { IWidgetModel, WidgetTypeEnum } from "./widgets/types";
import { WidgetModelFactory } from "./widget-factory";

export class EditorStateStore {
  private _widgetModelFactory: WidgetModelFactory;
  private _selectedWidgetId: string | null;
  
  widgets: Map<string, IWidgetModel>;

  constructor() {
    makeAutoObservable(this);
    this.widgets = new Map();
    this._widgetModelFactory = new WidgetModelFactory();
    this._selectedWidgetId = null;
  }

  importEditorState() {
    throw new Error('not implemented');
  }

  exportEditorState() {
    throw new Error('not implemented');
  }

  addWidget(widgetType: WidgetTypeEnum) {
    const widget = this.createWidget(widgetType);
    this.widgets.set(widget.id, widget);
    // TODO: remove
    this._selectedWidgetId = widget.id;
  }

  createWidget(widgetType: WidgetTypeEnum) {
    switch(widgetType) {
      case WidgetTypeEnum.Text:
        return this._widgetModelFactory.createTextWidgetModel();
    }
  }

  selectWidget(id: string) {
    this._selectedWidgetId = id;
  }

  getWidgetModelById(id: string) {
    return this.widgets.get(id);
  }

  get widgetIdList() {
    return [...this.widgets.keys()];    
  }

  get selectedWidgetId() {
    return this._selectedWidgetId;
  }
}