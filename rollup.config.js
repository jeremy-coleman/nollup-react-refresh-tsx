import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import commonjs from 'rollup-plugin-commonjs-alternate';
import replace from '@rollup/plugin-replace';
import static_files from 'rollup-plugin-static-files';
import { terser } from 'rollup-plugin-terser';
import refresh from 'rollup-plugin-react-refresh';

let config = {
    input: './src/main.tsx',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        hotcss({
            hot: process.env.NODE_ENV === 'development',
            filename: 'styles.css'
        }),
        babel({
            skipPreflightCheck: true,
            babelHelpers: "bundled",
            extensions:[ '.mjs', '.js', ".cjs", ".tsx",".jsx",".jsx"]
        }),
        node_resolve({
            extensions:[ '.mjs', '.js', '.json', '.node',".tsx",".jsx",".jsx"]
        }),
        commonjs({
            namedExports: {
                'node_modules/react/index.js': [
                    'Component',
                    'createContext'
                ]
            }
        }),
        process.env.NODE_ENV === 'development' && refresh()
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        static_files({
            include: ['./public']
        }),
        terser({
            compress: {
                global_defs: {
                    module: false
                }
            }
        })
    ]);
}

export default config;