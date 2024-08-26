import { EditorCanvas } from "../editor-canvas/editor-canvas"
import { EditorContextProvider } from "../editor-context"
import { EditorLayout } from "../editor-layout/editor-layout"
import { EditorSidebar } from "../editor-sidebar/editor-sidebar"

export const EditorPlayground = () => {
  return <div>
    <EditorContextProvider>
    <EditorLayout>
      <EditorLayout.Sidebar>
        <EditorSidebar />
      </EditorLayout.Sidebar>
      <EditorLayout.Canvas>
        <EditorCanvas />
      </EditorLayout.Canvas>
    </EditorLayout>
    </EditorContextProvider>
  </div>
}