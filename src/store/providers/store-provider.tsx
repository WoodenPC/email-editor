import { ReactNode, useState } from "react";
import { RootStore } from "../root-store";
import { StoreContext } from "../store-context";

export function RootStoreProvider({ children }: { children: ReactNode }) {
  // only create root store once (store is a singleton)
  const [root] = useState(new RootStore());

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}