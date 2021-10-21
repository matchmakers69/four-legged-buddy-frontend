import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

const ReduxProvider = (props: PropsWithChildren<object>) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<span>Is loading...</span>}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
