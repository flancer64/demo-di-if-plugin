import resolve from '@rollup/plugin-node-resolve'; // static imports resolving
import terser from '@rollup/plugin-terser'; // minification

export default {
    input: 'src/Drive.js',
    output: [
        {
            file: 'dist/esm.js',
            format: 'es'
        },
        {
            file: 'dist/umd.js',
            format: 'umd',
            name: 'Trans_Drive',
        }
    ],
    plugins: [
        resolve(),
        terser()
    ]
};
