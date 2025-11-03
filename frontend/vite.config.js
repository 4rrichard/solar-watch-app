import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";

const mode = process.env.DOCKER ? "docker" : "local";
dotenv.config({ path: path.resolve(__dirname, `../.env.${mode}`) });

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
