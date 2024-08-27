import { createContext, ReactNode, useCallback, useMemo } from "react";
import { EditorWidgetType } from "./editor-widgets/types";

type EditorContextData = {
  updateWidget: <T>(
    componentId: string,
    fieldName: string,
    fieldValue: T
  ) => void;
  deleteWidget: (componentId: string) => void;
  // TODO: типизировать нормально
  addWidget: (componentType: EditorWidgetType) => void;
};

export const EditorContext = createContext<EditorContextData>({
  addWidget: () => {},
  deleteWidget: () => {},
  updateWidget: () => {},
});

//  TODO: remove
export const EditorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const handleAddWidget = useCallback(() => {}, []);

  const handleDeleteWidget = useCallback(() => {}, []);

  const handleUpdateWidget = useCallback(() => {}, []);

  const contextValue = useMemo<EditorContextData>(() => {
    return {
      addWidget: handleAddWidget,
      deleteWidget: handleDeleteWidget,
      updateWidget: handleUpdateWidget,
    };
  }, [handleAddWidget, handleDeleteWidget, handleUpdateWidget]);

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};
