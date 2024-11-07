import { ReactNode } from "react";

type EditableWidgetDecoratorProps = {
  className?: string;
  children: ReactNode;
  onSelect?: () => void;
};

// TODO: add hover and select logic
export const EditableWidgetDecorator = (
  props: EditableWidgetDecoratorProps
) => {
  const { children, className, onSelect } = props;
  return (
    <div className={className} onClick={onSelect} tabIndex={0}>
      {children}
    </div>
  );
};
