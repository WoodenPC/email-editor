import { useContext } from "react";
import { StoreContext } from "../store-context";

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error("RootStore is not defined in StoreContext");
  }

  return context;
}