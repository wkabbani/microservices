import { Document } from 'mongoose';

export interface Blog extends Document {
  readonly blogId: string;
  readonly title: string;
  readonly text: string;
}
