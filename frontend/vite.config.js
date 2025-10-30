import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const envFile = process.env.DOCKER ? "../.env.docker" : "../.env.local";
dotenv.config({ path: envFile });

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        proxy: {
            "/api": {
                target: process.env.BACKEND_URL || "http://localhost:8080",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
