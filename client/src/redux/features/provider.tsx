'use client';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "../slices/index.js";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
  </PersistGate>

}
