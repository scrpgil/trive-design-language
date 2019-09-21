import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-74490a1b.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["td-badge",[[4,"td-badge",{"color":[1]}]]],["td-button",[[1,"td-button",{"color":[1]}]]]], options);
});
