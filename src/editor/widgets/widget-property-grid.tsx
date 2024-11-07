import { useState } from "react";
import { observer } from "mobx-react"
import { useEditorStore } from "../hooks/useEditorStore";
import { createWidgetProperties } from "./create-widget-properties";
import { IWidgetModel } from "./types";
import { PropertyRenderer } from "../properties/property-renderer";

type WidgetPropertyGridBodyProps = {
  widgetModel: IWidgetModel;
}

const WidgetPropertyGridBody = observer((props: WidgetPropertyGridBodyProps) => {
  const { widgetModel } = props;
  const [properties] = useState(widgetModel ? createWidgetProperties(widgetModel) : [])
  return (
    <div>
      <h4 className="text-xl font-semibold tracking-tight mb-4">Свойства виджета</h4>
    <div className="flex flex-col w-full gap-4">
      {properties.map((property) => (
        <PropertyRenderer key={property.id} property={property} />
      ))}
    </div>
    </div>
  )
})


export const WidgetPropertyGrid = observer(() => {
  const editorStore = useEditorStore();
  const selectedWidgetModel = editorStore.selectedWidgetModel;

  if (!selectedWidgetModel) {
    return 'No widget selected';
  }

  return <WidgetPropertyGridBody widgetModel={selectedWidgetModel} />
})