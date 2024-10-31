import { observer } from "mobx-react"
import { useEditorStore } from "./hooks/useEditorStore";
import { EditorStateStore } from "./editor-state-store";
import { useState } from "react";
import { createWidgetProperties } from "./widgets/createWidgetProperties";

type WidgetPropertyGridBodyProps = {
  editorStateStore: EditorStateStore;
  selectedWidgetId: string;
}

const WidgetPropertyGridBody = observer((props: WidgetPropertyGridBodyProps) => {
  const { editorStateStore, selectedWidgetId } = props;
  const widgetModel = editorStateStore.getWidgetModelById(selectedWidgetId);
  const [properties] = useState(widgetModel ? createWidgetProperties(widgetModel) : [])
  console.log(properties);
  return <div></div>
})


export const WidgetPropertyGrid = observer(() => {
  const editorStore = useEditorStore();
  const selectedWidgetId = editorStore.selectedWidgetId;

  if (!selectedWidgetId) {
    return 'No widget selected';
  }

  return <WidgetPropertyGridBody editorStateStore={editorStore} selectedWidgetId={selectedWidgetId} />
})