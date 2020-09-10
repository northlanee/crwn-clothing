import { AppState } from "init/rootReducer";
import { Directory } from "types";

export const getDirectories = (state: AppState): Directory[] =>
  state.directory.directories;
