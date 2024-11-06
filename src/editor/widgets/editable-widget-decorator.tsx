import { ReactNode } from "react";

type EditableWidgetDecoratorProps = {
  children: ReactNode;
}

// TODO: implement
export const EditableWidgetDecorator = (props: EditableWidgetDecoratorProps) => {
  const { children } = props;
  return <>{children}</>;
}