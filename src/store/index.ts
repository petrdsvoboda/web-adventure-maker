import { createStore } from "redux";

import reducer from "./reducer";

function configureStore(initialState?: object) {
  return createStore(reducer, initialState!);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
