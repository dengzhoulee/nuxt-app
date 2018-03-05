module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'nuxt-app',
      script    : '',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'yaphet',
      host : '47.100.172.197',
      ref  : 'origin/master',
      repo : 'git@github.com:l-d-z/nuxt-app.git',
      path : '/home/yaphet/nuxt-app/production',
      ssh_options: 'StrictHostKeyChecking=no',
      'pre-deploy-local': 'echo "deploy done!"',
      'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env production && nuxt build && nuxt start',
      env  : {
        NODE_ENV: 'production'
      }
    },
    dev : {
      user : 'yaphet',
      host : '47.100.172.197',
      ref  : 'origin/master',
      repo : 'git@github.com:l-d-z/nuxt-app.git',
      path : '/home/yaphet/nuxt-app/dev',
      'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
