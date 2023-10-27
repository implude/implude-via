import {UseStore, setMany} from 'idb-keyval';

import type {
  DefinitionVersion,
  DefinitionVersionMap,
  KeyboardDictionary,
  VIADefinitionV2,
  VIADefinitionV3,
  VIAKey,
} from '@the-via/reader';

const mk1JSON = JSON.parse(`
{
  "name": "implude_mk1",
  "vendorId": "0x494D",
  "productId": "0x4D31",
  "matrix": {
    "rows": 3,
    "cols": 3
  },
  "layouts": {
    "keymap": [
      [
        "0,0\\n\\n\\n\\n\\n\\n\\n\\n\\ne0",
        {
          "x": 1
        },
        "0,2\\n\\n\\n\\n\\n\\n\\n\\n\\ne1"
      ],
      [
        "1,0",
        "1,1",
        "1,2"
      ],
      [
        "2,0",
        "2,1",
        "2,2"
      ]
    ]
  },
  "menus": ["qmk_rgb_matrix"]
}
`);
// const mk1Blob = new Blob([mk1JSON], { type : 'plain/text' });

const mk1 = [
  1229802801,
  {
    ['v3']: {
      customKeycodes: undefined,
      firmwareVersion: 0,
      keycodes: ['qmk_lighting'],
      layouts: {
        height: 3,
        width: 3,
        optionKeys: {},
        keys: [
          {
            col: 0,
            color: 'alpha',
            d: false,
            ei: 0,
            h: 1,
            h2: undefined,
            r: 0,
            row: 0,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 0,
            x2: undefined,
            y: 0,
            y2: undefined,
          },
          {
            col: 2,
            color: 'alpha',
            d: false,
            ei: 1,
            h: 1,
            h2: undefined,
            r: 0,
            row: 0,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 2,
            x2: undefined,
            y: 0,
            y2: undefined,
          },
          {
            col: 0,
            color: 'alpha',
            d: false,
            h: 1,
            h2: undefined,
            r: 0,
            row: 1,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 0,
            x2: undefined,
            y: 1,
            y2: undefined,
          },
          {
            col: 1,
            color: 'alpha',
            d: false,
            h: 1,
            h2: undefined,
            r: 0,
            row: 1,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 1,
            x2: undefined,
            y: 1,
            y2: undefined,
          },
          {
            col: 2,
            color: 'alpha',
            d: false,
            h: 1,
            h2: undefined,
            r: 0,
            row: 1,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 2,
            x2: undefined,
            y: 1,
            y2: undefined,
          },
          {
            col: 0,
            color: 'alpha',
            d: false,
            h: 1,
            h2: undefined,
            r: 0,
            row: 2,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 0,
            x2: undefined,
            y: 2,
            y2: undefined,
          },
          {
            col: 1,
            color: 'alpha',
            d: false,
            h: 1,
            h2: undefined,
            r: 0,
            row: 2,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 1,
            x2: undefined,
            y: 2,
            y2: undefined,
          },
          {
            col: 2,
            color: 'alpha',
            d: false,
            h: 1,
            h2: undefined,
            r: 0,
            row: 2,
            rx: 0,
            ry: 0,
            w: 1,
            w2: undefined,
            x: 2,
            x2: undefined,
            y: 2,
            y2: undefined,
          },
        ],
      },
      matrix: {
        cols: 3,
        rows: 3,
      },
      menus: ['qmk_rgb_matrix'],
      name: 'implude_mk1',
      vendorProductId: 1229802801,
    },
  },
] as [IDBValidKey, any];
export function initmk1() {
  return setMany([mk1]);
}
// export const MK1File = [new File([mk1Blob], "mk1.json", {type: "text/plain"})];
