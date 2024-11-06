import { observer } from "mobx-react"
import { useEditorStore } from "./hooks/useEditorStore"
import { WidgetRenderer } from "./widgets/widget-renderer";

export const EmailFrame = observer(() => {
  const editorStore = useEditorStore();
  const widgetIdList = editorStore.widgetIdList;
  return (
    <div>
      {widgetIdList.map((widgetId) => {
        return <WidgetRenderer key={widgetId} widgetId={widgetId} />
      })}
    </div>
  )
})