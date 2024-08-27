import { EditorWidgetType } from '@/editor-widgets/types';
import { makeAutoObservable} from 'mobx'

export class WidgetStore {
  widgetsData: Record<string, unknown>; // TODO;
  widgetsSchemas: Record<string, unknown>;

  constructor() {
    makeAutoObservable(this);
    this.widgetsData = {};
    this.widgetsSchemas = {};
  }

  addWidget(widgetType: EditorWidgetType) {
    console.log(widgetType);
  }

  deleteWidget() {

  }

  updateWidget() {
    
  }
}
