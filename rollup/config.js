import resolve from '@rollup/plugin-node-resolve';

const plugins = [resolve()];

export default [{
    input: './rollup/fontawesome.js',
    output: {
        file: './public/fontawesome.js',
        format: 'esm'
    },
    plugins
}];
