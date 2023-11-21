import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
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
  plugins: [json()]
};
