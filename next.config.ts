import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  async redirects() {
    return [{
      source: "/inicio", // caso alguem tente acessar "/pizzas/mussarela"
      destination: "/", // será direcionado parar "/pizzas/marguerita"
      permanent: true, // informa se esse redirecionamento é permanente ou não
    }];
  },
  allowedDevOrigins: ["192.168.0.3"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
