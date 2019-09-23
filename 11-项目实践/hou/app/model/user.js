module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const User = app.model.define('user', { //sequelize会自动创建主键
        name: STRING,
        password:STRING,
    })

    return User;
}