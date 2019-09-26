'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getdata', app.middleware.checktoken(), controller.home.index);
  router.post('/login', controller.login.login);
};
