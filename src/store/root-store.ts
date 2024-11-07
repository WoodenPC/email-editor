import { EditorStore } from "@/editor/editor-store";

export class RootStore {
  editorState: EditorStore;

  constructor() {
    this.editorState = new EditorStore();
  }
}