import { WidgetStore } from "./widget-store";

export class RootStore {
  widgetStore: WidgetStore;
  constructor() {
    this.widgetStore = new WidgetStore();
  }
}