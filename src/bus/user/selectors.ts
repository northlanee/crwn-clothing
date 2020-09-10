import { AppState } from "../../init/rootReducer";
import { User } from "./types";

export const getCurrentUser = (state: AppState): User => state.user.currentUser;
