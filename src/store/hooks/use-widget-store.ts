import { useStoreContext } from "./use-store-context"

export const useWidgetStore = () => {
  const rootStore = useStoreContext();

  return rootStore.widgetStore;
}