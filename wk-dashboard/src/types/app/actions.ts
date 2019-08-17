import { TodoAction } from "../todo/actions";
import { BlogAction } from "../blog/actions";

export type AppAction = TodoAction | BlogAction;
