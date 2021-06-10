module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@errors': './src/errors',
        '@middlewares': './src/middlewares',
        '@models': './src/models',
        '@repositories': './src/repositories',
        '@routes': './src/routes',
        '@services': './src/services',
        '@templates': './src/templates'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
