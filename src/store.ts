import { legacy_createStore } from "redux";
import { InitialState, Post, Action } from "./interfaces/Store";

const initialState: InitialState = {
  post: { id: "", title: "", body: "" },
  cachedId: 1,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SETPOST":
      return { ...state, post: action.payload as Post };
    case "SETCACHEDID":
      return { ...state, cachedId: action.payload as number };
    default:
      return state;
  }
};
const store = legacy_createStore(reducer);

export default store;
