const Service = require('egg').Service;

class UserService extends Service {
    async getclazzlist() {
        try{
            const clazzList = await this.app.model.Clazz.findAll();
            return{
                code:20000,
                data:clazzList
            }

        }catch(error){
            return{
                code:30000,
                data:"失败"
            }
        }
    }

    async insertclazz() {
        try{
            let name = this.ctx.request.body.name;
            const clazz = {
                clazzname: name
            }
            await this.app.model.Clazz.create(clazz);
            const clazzList = await this.app.model.Clazz.findAll();
            return{
                code:20000,
                data:clazzList
            }

        }catch(error){
            return{
                code:30000,
                data:"失败"
            }
        }
    }

    async deleteclazz() {
        try{
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
                return {
                    code:30000,
                    data:tips
                }
            } else {
                clazz.destroy();
                return {
                    code:20000,
                    data:clazzList
                }
            }
        }catch(error){

        }
    }

    async putclazz() {
        try{
            let id = this.ctx.params.id
            let putclazzname = this.ctx.request.body.putclazzname
            let row = {
                clazzname: putclazzname
            },
                options = {
                    where: {
                        id: id
                    }
                }
            await this.app.model.Clazz.update(row, options);
            const clazzList = await this.app.model.Clazz.findAll();
            return {
                code:20000,
                data:clazzList
            }
            
        }catch(error){
            return{
                code:30000,
                data:"失败"
            }
        }
    }
    
}

module.exports = UserService;