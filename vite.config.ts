/// <reference types="vitest/config" />
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
});
