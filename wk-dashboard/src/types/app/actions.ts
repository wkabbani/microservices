import { TodoAction } from "../todo/actions";
import { BlogAction } from "../blog/actions";
import { SentimentAction } from "../sentiment/actions";

export type AppAction = TodoAction | BlogAction | SentimentAction;
