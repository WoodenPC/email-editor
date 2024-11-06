import { useState } from "react";
import { observer } from "mobx-react"
import { useEditorStore } from "../hooks/useEditorStore";
import { createWidgetProperties } from "./create-widget-properties";
import { IWidgetModel } from "./types";

type WidgetPropertyGridBodyProps = {
  widgetModel: IWidgetModel;
}

const WidgetPropertyGridBody = observer((props: WidgetPropertyGridBodyProps) => {
  const { widgetModel } = props;
  const [properties] = useState(widgetModel ? createWidgetProperties(widgetModel) : [])
  console.log(properties);
  return <div></div>
})


export const WidgetPropertyGrid = observer(() => {
  const editorStore = useEditorStore();
  const selectedWidgetModel = editorStore.selectedWidgetModel;

  if (!selectedWidgetModel) {
    return 'No widget selected';
  }

  return <WidgetPropertyGridBody widgetModel={selectedWidgetModel} />
})