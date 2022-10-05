import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'bundle/otherdash.js',
      format: 'cjs'
    },
    {
      file: 'bundle/otherdash.es.js',
      format: 'es'
    },
    {
      file: 'bundle/otherdash.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [json()]
};
