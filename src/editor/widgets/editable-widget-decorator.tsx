import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type EditableWidgetDecoratorProps = {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean
}


export const EditableWidgetDecorator = (props: EditableWidgetDecoratorProps) => {
  const { children, onSelect, isSelected } = props;
  return <div className={cn("group  ring-blue-400 ring-offset-4 ring-offset-slate-50", isSelected ? 'ring-1 ring-black hover:ring-gray-400' : 'hover:ring-1')} onClick={onSelect}>{children}</div>;
}