import resolve from 'rollup-plugin-node-resolve';

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
	input: ['src/my-element.js'],
	output: {
		file: 'build/my-element.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve()
  ]
};