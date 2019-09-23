'use strict';
  
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
 // 默认起始文件
  router.post('/', controller.home.index);
  router.get('/', controller.home.index);
  //班级管理
  router.get('/getclazz', controller.clazz.get);
  router.post('/insertclazz', controller.clazz.create);
  router.delete('/deleteclazz:id', controller.clazz.destroy);
  router.put('/putclazz:id', controller.clazz.update);

 // // 登录和注册
 router.post('/login', controller.login.index);//坏
 router.post('/user', controller.user.index);//好

  // 学生管理
  router.get('/getstudent', controller.student.get);
  router.post('/insertstudent', controller.student.create);
  router.delete('/deletestudent:id', controller.student.destroy);
  router.put('/putstudent:id', controller.student.update);
};