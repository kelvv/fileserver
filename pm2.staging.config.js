module.exports = {
  apps: [
    {
      name: 'fileserver',
      script: './index.js',
      env: { // all environment
        'NODE_ENV': 'staging'
      },
      // 'instances': 'max', // 如果是fork, 不用配置
      'exec_mode': 'fork' // cluster or fork
    }
  ]
}
