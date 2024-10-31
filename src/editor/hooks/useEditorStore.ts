import { useStoreContext } from "@/store/hooks/use-store-context"

export const useEditorStore = () => {
  const rootStore = useStoreContext();
  return rootStore.editorState;
}