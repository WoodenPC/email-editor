import { observer } from "mobx-react";
import { useEditorStore } from "./hooks/useEditorStore";
import { WidgetTypeEnum } from "./widgets/types";
import { TextWidgetComponent } from "./widgets/text-widget/text-widget.ui";
import { ITextWidgetModel } from "./widgets/text-widget/text-widget.model";

type WidgetRendererProps = {
  widgetId: string;
}

export const WidgetRenderer = observer((props: WidgetRendererProps) => {
  const { widgetId } = props;
  const editorStore = useEditorStore();
  const widgetModel = editorStore.getWidgetModelById(widgetId);


  if (!widgetModel) {
    return <div>Widget not found</div>
  }

  switch(widgetModel.widgetType) {
    case WidgetTypeEnum.Text:
      return <TextWidgetComponent model={widgetModel as unknown as ITextWidgetModel} />
    default:
      return <div>Unknown widget type</div>;
  }

  
})