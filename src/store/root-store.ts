import { EditorStore } from "@/editor/editor-state-store";

export class RootStore {
  editorState: EditorStore;

  constructor() {
    this.editorState = new EditorStore();
  }
}