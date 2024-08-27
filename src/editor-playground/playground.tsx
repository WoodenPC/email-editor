import { RootStoreProvider } from "@/store/providers/store-provider"
import { EditorCanvas } from "../editor-canvas/editor-canvas"
import { EditorLayout } from "../editor-layout/editor-layout"
import { EditorSidebar } from "../editor-sidebar/editor-sidebar"

export const EditorPlayground = () => {
  return <div>
    <RootStoreProvider>
    <EditorLayout>
      <EditorLayout.Sidebar>
        <EditorSidebar />
      </EditorLayout.Sidebar>
      <EditorLayout.Canvas>
        <EditorCanvas />
      </EditorLayout.Canvas>
    </EditorLayout>
    </RootStoreProvider>
  </div>
}