import { ReactNode } from "react";
import { Image, FileCode } from "lucide-react";
import { EditorWidgetType } from "@/editor-widgets/types";
import { observer } from "mobx-react";
import { useWidgetStore } from "@/store/hooks/use-widget-store";

const ContentWidgetBlock = ({
  icon,
  title,
  onClick,
}: {
  icon: ReactNode;
  title: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center p-5 border-solid border-2 border-gray-400 rounded-sm hover:border-green-600 cursor-pointer"
    >
      {icon}
      {/* TODO: продумать верстку нейминга */}
      <span className="text-xs">{title}</span> 
    </div>
  );
};

export const SidebarContentTabView = observer(() => {
  const widgetStore = useWidgetStore();
  const addWidgetToCanvas = (widgetType: EditorWidgetType) => () => {
    widgetStore.addWidget(widgetType)
  };

  return (
    <div>
      <h2>Виджеты</h2>
      <div className="grid grid-cols-3 gap-4">
        <ContentWidgetBlock
          icon={<Image />}
          title="Изображение"
          onClick={addWidgetToCanvas('image')}
        />
        <ContentWidgetBlock
          icon={<FileCode />}
          title="Текст"
          onClick={addWidgetToCanvas('text')}
        />
      </div>
    </div>
  );
});
