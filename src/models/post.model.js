import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    tags: {
      type: [String],
      default: [],
    },
    timeStamps: true,
    toJson: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  },
);

export const Post = mongoose.model('post', postSchema)