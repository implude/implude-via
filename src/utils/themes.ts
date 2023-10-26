import {THEMES as REMOTETHEMES} from '@the-via/reader';
import {KeyColorPair} from 'src/types/keyboard-rendering';

export type Theme = {
  alpha: KeyColorPair;
  mod: KeyColorPair;
  accent: KeyColorPair;
};

export const THEMES = {
  ...{
    IMPLUDE: {
      alpha: {
        c: '#363434',
        t: '#689CD7',
      },
      mod: {
        c: '#363434',
        t: '#689CD7',
      },
      accent: {
        c: '#689CD7',
        t: '#363434',
      },
    },
  },
  ...REMOTETHEMES,
};
