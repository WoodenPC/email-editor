import { EditorWidgetType } from '@/editor-widgets/types';
import {  makeAutoObservable} from 'mobx'

class WidgetStore {
  widgetsData: Record<string, EditorWidgetType>;

  constructor() {
    makeAutoObservable(this);
    this.widgetsData = {}
  }

  addWidget() {

  }

  deleteWidget() {

  }

  updateWidget() {
    
  }
}

export const widgetStore = new WidgetStore();