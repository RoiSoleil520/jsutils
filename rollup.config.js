import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import { name, version, author } from './package.json'

const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.min.js',
      format: 'umd',
      name,
      banner
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: ['node_modules/**'],
      include: ['src/**/*.js', 'example/*.js'],
      comments: false // 会把需要打包的源文件中的注释给去掉
    }),
    uglify(
      {
        compress: {
          drop_console: true
        },
        sourcemap: false
      }
    )
  ]
}
