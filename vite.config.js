import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import legacy from '@vitejs/plugin-legacy';
import { string } from 'rollup-plugin-string';

const legacyScriptsPlugin = () => {
  return {
    name: 'html-transform',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      sequential: true,
      handler(html) {
        console.log('Removing module scripts to always fallback legacy build');

        return html
          .replace(
            /<script type="module"(.*?)<\/script>/g,
            '<!--  removed module -->'
          )
          .replace(
            /<link rel="modulepreload"(.*?)>/g,
            '<!--  removed modulepreload -->'
          )
          .replace(/<script nomodule/g, '<script');
      },
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  plugins: [
    svelte(),
    string({
      include: 'src/assets/**/*.svg',
    }),
    legacy({
      targets: [
        'Chrome >= 53',
        'not IE 11',
        'not dead',
        'not ie 11',
        'not baidu 7',
        'not and_qq 11',
        'not and_uc 12',
        'not kaios 2',
        'not op_mini all',
        'not op_mob 64',
      ], // Apply polyfills to support older browsers. See https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine#web-engine
    }),
    legacyScriptsPlugin(),
  ],
});
