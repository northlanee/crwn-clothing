import { Middleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? "firebrick" : "deepskyblue"),
    prevState: (): string => "#1C5FAF",
    action: (): string => "#149945",
    nextState: (): string => "#A47104",
    error: (): string => "#FF005",
  },
});

const middleware: Middleware[] = [logger, thunk];

export { middleware };
