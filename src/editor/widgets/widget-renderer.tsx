import { useEditorStore } from "../hooks/useEditorStore";
import { WidgetTypeEnum } from "./types";
import { TextWidgetComponent } from "./text-widget/text-widget.ui";
import { ITextWidgetModel } from "./text-widget/text-widget.model";

type WidgetRendererProps = {
  widgetId: string;
}

export const WidgetRenderer = (props: WidgetRendererProps) => { 
  const { widgetId } = props;
  const editorStore = useEditorStore();
  const widgetModel = editorStore.getWidgetModelById(widgetId);


  if (!widgetModel) {
    return <div>Ошибка отображения виджета</div>
  }

  switch(widgetModel.widgetType) {
    case WidgetTypeEnum.Text:
      return <TextWidgetComponent model={widgetModel as unknown as ITextWidgetModel} />
    default:
      return <div>Неизвестный тип виджета</div>;
  } 
}