import { nanoid } from "nanoid";
import { TextWidgetModel } from "../text-widget";

export const createTextWidgetModel = () => {
  return new TextWidgetModel(nanoid(), 'test-text-todo-remove');
}