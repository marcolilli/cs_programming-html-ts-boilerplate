import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import watch from 'rollup-plugin-watch';

export default {
    input: 'src/main.ts',
    output: {
        dir: 'build',
        format: 'cjs'
    },
    treeshake: false,
    plugins: [
        watch({
            dir: "src",
            clearScreen: false
        }),
        typescript({tsconfig: "./tsconfig.json"}),
        copy({
            targets: [
                {src: 'src/*.html', dest: 'build'},
                {src: 'src/*.css', dest: 'build'}
            ],
        }),
    ],
};