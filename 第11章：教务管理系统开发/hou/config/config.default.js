/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555466639828_8861';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8080/', 'http://localhost:8080','http://localhost:8081','http://localhost:8080/'], //配置白名单
};
  
config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
  config.sequelize = {
    dialect: 'mysql', 
    database: 'studentsystem',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    operatorsAliases: false,
  }

  exports.jwt = {
    secret: "123456"
  };
  
  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  return {
    ...config,
    ...userConfig,
  };
};
