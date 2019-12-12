module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Clazz = app.model.define('clazz', { //sequelize会自动创建主键
        clazzname: STRING,
    })

    return Clazz;
}