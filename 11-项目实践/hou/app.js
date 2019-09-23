module.exports = app => {
    app.beforeStart(async function () {
        // 应用会等待这个函数执行完成才启动
        // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表
        await app.model.sync({});
    });
};
