import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  env: {
    NEXT_MONGO_CONNECTION_URL: "mongodb://localhost:27017/nextjs-mastery",
    FRONTEND_URL: "http://localhost:3000",
    GITHUB_CLIENT_ID: "Ov23liFX9g4sP524dIgY",
    clientSecret: "987171ae01b2c45a0ade191029a102cbe16a89b2",
  },
  output: "standalone",
  images: {
    domains: ["setare.com" , "elanet.ir"],
  },
};

export default nextConfig;
