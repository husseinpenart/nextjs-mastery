import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  env: {
    NEXT_MONGO_CONNECTION_URL: "mongodb://localhost:27017/nextjs-mastery",
    FRONTEND_URL: "http://localhost:3000",
  },
};

export default nextConfig;
