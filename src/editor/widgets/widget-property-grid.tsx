import { useEffect, useState, useTransition } from "react";
import { observer } from "mobx-react";
import { useEditorStore } from "../hooks/useEditorStore";
import { createWidgetPropertyItems } from "./create-widget-property-items";
import { IWidgetModel } from "./types";
import { PropertyRenderer } from "../properties/property-renderer";
import { isPropertyGroup } from "../properties/lib/type-guards";
import { PropertyGroupRenderer } from "../properties/property-group-renderer";

type WidgetPropertyGridBodyProps = {
  widgetModel: IWidgetModel;
};

const WidgetPropertyGridBody = observer(
  (props: WidgetPropertyGridBodyProps) => {
    const { widgetModel } = props;
    const [isPending, startTransition] = useTransition();
    const [propertyItems, setPropertyItems] = useState(
      createWidgetPropertyItems(widgetModel)
    );

    useEffect(() => {
      startTransition(() => {
        setPropertyItems(createWidgetPropertyItems(widgetModel));
      });
    }, [widgetModel]);

    if (isPending) {
      return "...Загрузка";
    }

    return (
      <div>
        <h4 className="text-xl font-semibold tracking-tight mb-4">
          Свойства виджета
        </h4>
        <div className="flex flex-col w-full gap-4">
          {propertyItems.map((propertyItem) => {
            if (isPropertyGroup(propertyItem)) {
              return <PropertyGroupRenderer />;
            }
            return (
              <PropertyRenderer key={propertyItem.id} property={propertyItem} />
            );
          })}
        </div>
      </div>
    );
  }
);

export const WidgetPropertyGrid = observer(() => {
  const editorStore = useEditorStore();
  const selectedWidgetModel = editorStore.selectedWidgetModel;

  if (!selectedWidgetModel) {
    return "Выберите виджет для редактирования";
  }

  return <WidgetPropertyGridBody widgetModel={selectedWidgetModel} />;
});
