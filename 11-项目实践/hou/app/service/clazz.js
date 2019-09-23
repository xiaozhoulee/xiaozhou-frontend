const Service = require('egg').Service;

class UserService extends Service {
    async getclazzlist() {
        const clazzList = await this.app.model.Clazz.findAll();
        return clazzList
    }

    async insertclazz() {
        let name = this.ctx.request.body.name;
        console.log(name)
        const clazz = {
            name: name
        }
        await this.app.model.Clazz.create(clazz);
        const clazzList = await this.app.model.Clazz.findAll();

        return clazzList
    }

    async deleteclazz() {
        let id = this.ctx.params.id
        const clazz = await this.app.model.Clazz.findOne({
            where: {
                id: id
            }
        });
        const student = await this.app.model.Students.findAll({
            include: [{  //联查班级的数据
                model: this.app.model.Clazz,
                as: 'clazz'
            }],
            where: {
                clazz_id: id
            }
        });
        const clazzList = await this.app.model.Clazz.findAll();
        if (student[0]) {
            let tips = "班级中存在学生，不可删除班级"
            return tips
        } else {
            clazz.destroy();
            return clazzList
        }
    }

    async putclazz() {
        let id = this.ctx.params.id
        let putclazzname = this.ctx.request.body.putclazzname
        let row = {
            name: putclazzname
        },
            options = {
                where: {
                    id: id
                }
            }
        await this.app.model.Clazz.update(row, options);
        const clazzList = await this.app.model.Clazz.findAll();
        return clazzList
    }
    
}

module.exports = UserService;