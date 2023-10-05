import {createContext} from "react";

export const PopupCtx = createContext(undefined)

export const AuthCtx = createContext({
  online: false,
  staffId: null,
  name: null,
  token: null,
})
