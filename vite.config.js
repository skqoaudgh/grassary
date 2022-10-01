import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslintPlugin()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/client'),
		},
	},
	root: './src/client',
	publicDir: '/workspace/grassary/public',
});
