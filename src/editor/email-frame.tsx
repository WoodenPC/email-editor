import { observer } from "mobx-react"
import { useEditorStore } from "./hooks/useEditorStore"
import { WidgetRenderer } from "./widgets/widget-renderer";
import { EditableWidgetDecorator } from "./widgets/editable-widget-decorator";

export const EmailFrame = observer(() => {
  const editorStore = useEditorStore();
  const widgetIdList = editorStore.widgetIdList;
  
  return (
    <div>
      {widgetIdList.map((widgetId) => {
        return <EditableWidgetDecorator key={widgetId} onSelect={() => {
          editorStore.selectWidget(widgetId)
        }} isSelected={editorStore.selectedWidgetId === widgetId}><WidgetRenderer  widgetId={widgetId}  /></EditableWidgetDecorator>
      })}
    </div>
  )
})