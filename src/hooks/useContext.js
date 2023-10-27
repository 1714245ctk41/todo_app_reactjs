import { createContext } from 'react';

export const AppContext = createContext();

export const ACTIONS = {
  AUTHOR: "AUTHOR",
  ADD_ITEM: "ADD_ITEM",
  EDIT_ITEM: "EDIT_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
};