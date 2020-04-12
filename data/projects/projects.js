import Microspot, { meta as microspotMeta } from './microspot.mdx';
import ObiMagazin, { meta as obiMagazinMeta } from './obi-magazin.mdx';
import Vaillant, { meta as vaillantMeta } from './vaillant.mdx';

export const projects = {
  microspot: {
    component: Microspot,
    meta: microspotMeta,
  },
  'obi-magazin': {
    component: ObiMagazin,
    meta: obiMagazinMeta,
  },
  vaillant: {
    component: Vaillant,
    meta: vaillantMeta,
  },
};
