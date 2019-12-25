import babel from 'rollup-plugin-babel';
import 'core-js';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'input.js',
  output: [{
      file: 'output-iife.dist.js',
      format: 'iife',
      name: 'test'
    }, {
      file: 'output-amd.dist.js',
      format: 'amd',
    }, {
      file: 'output-cjs.dist.js',
      format: 'cjs',
    },
  ],
  plugins: [
    babel({
      babelrc: false,
      include: `*.js`,
      exclude: `node_modules/**`,
      presets: [[ '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          targets: { ie: "8" },  // bulds targeting ie >= 9, not ie 8
          corejs: 3,
        }]],
    }),
    resolve(),
    commonjs()
  ],
};
