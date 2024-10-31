import { EditorStateStore } from "@/editor/editor-state-store";

export class RootStore {
  editorState: EditorStateStore;

  constructor() {
    this.editorState = new EditorStateStore();
  }
}