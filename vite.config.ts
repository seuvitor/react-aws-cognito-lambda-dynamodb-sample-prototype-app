import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pigment } from "@pigment-css/vite-plugin";

export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [pigment({}), react()],
	server: {
		port: 5000,
	},
});
