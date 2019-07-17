import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/',
      prerenderConfig: './prerender.config.js',
      serviceWorker: {
        unregister: true
      }
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender'
    }
  ],
  globalStyle: 'src/global/style/app.css'
};
