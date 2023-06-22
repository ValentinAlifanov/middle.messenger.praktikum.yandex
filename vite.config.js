import { defineConfig } from "vite";

export default defineConfig({
    plugins: [],
    server: {
        host: true,
        port: 3000,
        open: true,
        // watch: {
        //     usePolling: true
        // }
    },
    // build: {
    //     watch: './vite.config.js',
    // },
    css: {
        devSourcemap: true,
    },
});