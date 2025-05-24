// models/Post.ts
import mongoose, { Schema, models, model } from 'mongoose';

const postSchema = new Schema({
  title: { type: String, required: true },
  content: String,
});

export const Post = models.Post || model('Post', postSchema);
