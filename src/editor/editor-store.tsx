import { makeAutoObservable } from "mobx";
import { IWidgetModel, WidgetTypeEnum } from "./widgets/types";
import { widgetCreators } from "./widgets/widget-model-creators";
export class EditorStore {
  private _selectedWidgetId: string | null;
  
  widgets: Map<string, IWidgetModel>;

  constructor() {
    makeAutoObservable(this);
    this.widgets = new Map();
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
  }

  createWidget(widgetType: WidgetTypeEnum) {
    switch(widgetType) {
      case WidgetTypeEnum.Text:
        return widgetCreators.createTextWidgetModel();
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

  get selectedWidgetModel() {
    if (!this._selectedWidgetId) {
      return null;
    }

    if (!this.widgets.has(this._selectedWidgetId)) {
      return null
    }

    return this.widgets.get(this._selectedWidgetId);
  }
}