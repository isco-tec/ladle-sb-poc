import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const isGithubPages = process.env.GITHUB_PAGES === 'true';

  return {
    base: isGithubPages ? '/ladle-sb-poc/' : '/',
    plugins: [react()],
  };
});