import { AppState } from "init/rootReducer";
import { Section } from "types";

export const getSections = (state: AppState): Section[] =>
  state.directory.sections;
