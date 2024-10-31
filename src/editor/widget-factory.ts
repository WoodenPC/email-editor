import {nanoid} from 'nanoid'
import { TextWidgetModel } from "./widgets/text-widget/text-widget.model";


export class WidgetModelFactory {
  constructor() {}

  createTextWidgetModel() {
    return new TextWidgetModel(nanoid(), 'test-text-todo-remove');
  }
}