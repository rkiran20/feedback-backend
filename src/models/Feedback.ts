import mongoose, { Schema, Document } from "mongoose";

export interface IFeedback extends Document {
  company: string;
  badgeLetter: string;
  upvoteCount: number;
  daysAgo: number;
  text: string;
}

const FeedbackSchema: Schema = new Schema(
  {
    company: { type: String, required: true },
    badgeLetter: { type: String, required: true },
    upvoteCount: { type: Number, default: 0 },
    daysAgo: { type: Number, default: 0 },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IFeedback>("Feedback", FeedbackSchema);
