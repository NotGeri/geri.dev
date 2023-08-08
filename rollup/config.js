import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

const plugins = [resolve(), terser()];

export default [{
    input: './rollup/fontawesome.js',
    output: {
        file: './public/fontawesome.js',
        format: 'esm'
    },
    plugins
}];
