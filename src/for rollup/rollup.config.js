import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];
export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [ 
    resolve({extensions}),
    commonjs(),
    typescript(),
    terser()
   ],
   external: ['react','lodash','styled-components'] 
};