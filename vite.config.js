import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    build: {
        rollupOptions: {
            input: {
                index: "index.html",
                404: "404.html",
                // Add more entries for each HTML file you want in your app
            },
        },
    },
});
