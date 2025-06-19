import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'bundle/sly-utils.js',
      format: 'cjs'
    },
    {
      file: 'bundle/sly-utils.es.js',
      format: 'es'
    },
    {
      file: 'bundle/sly-utils.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [json(), typescript({ tsconfig: './tsconfig.json' })]
};
