// lib/mongoose.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_MONGO_CONNECTION_URL!;

if (!MONGODB_URI) throw new Error('MONGODB_URI not defined');

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGODB_URI, {
    dbName: 'nextjs-mastery',
    bufferCommands: false,
  });
}
