import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['main.js'],
  bundle: true,
  outfile: 'out.js',
})