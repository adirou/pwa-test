import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const isDev = process.env.NODE_ENV !== "production";

const withPWA = withPWAInit({
  dest: "public",
  disable: isDev,
  // You can add more PWA options here, like:
  // register: true, // auto-register service worker
  // scope: '/app', // PWA scope
  // sw: 'service-worker.js', // service worker file name
});


export default withPWA({
  
});
