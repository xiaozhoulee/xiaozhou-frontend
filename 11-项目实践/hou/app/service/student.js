const Service = require('egg').Service;

class UserService extends Service {
    async getStudentlist() {
        try{
            const studentList = await this.app.model.Students.findAll({
                include: [{  //联查班级的数据
                    model: this.app.model.Clazz,
                    as: 'clazz'
                }]
            });
            return {
                code:20000,
                data:studentList
            }
        }catch(error){
            return{
                code:30000,
                data:"失败"
            }
        }
    }
    async insertStudentlist() {
        try{
            let studentname = this.ctx.request.body.studentname
            let clazz_id = this.ctx.request.body.clazz_id
            let studentage = this.ctx.request.body.studentage
            let studentsex = this.ctx.request.body.studentsex
            const student = {
                studentname: studentname,
                age: studentage,
                sex: studentsex,
                clazz_id: clazz_id,
    
            }
            await this.app.model.Students.create(student);
            const studentList = await this.app.model.Students.findAll({
                include: [{  //联查班级的数据
                    model: this.app.model.Clazz,
                    as: 'clazz'
                }]
            });
            return{
                code:20000,
                data:studentList
            }
        }catch(error){
            return{
                code:30000,
                data:"失败"
            }
        }
    }
    async deleteStudentlist() {
        try{
            let id = this.ctx.params.id
            const student = await this.app.model.Students.findOne({
                where: {
                    id: id
                }
            })
            const studentList = await this.app.model.Students.findAll({
                include: [{  //联查班级的数据
                    model: this.app.model.Clazz,
                    as: 'clazz'
                }]
            });
            student.destroy()
            return {
                code:20000,
                data:studentList
            }
        }catch(error){
            return{
                code:30000,
                data:"失败"
            }
        }
    }
    async putStudentlist() {
        try{
            const studentList = await this.app.model.Students.findAll({
                include: [{  //联查班级的数据
                    model: this.app.model.Clazz,
                    as: 'clazz'
                }]
            });
            let putstudentname = this.ctx.request.body.putstudentname
            let id = this.ctx.params.id
            let clazz_id = this.ctx.request.body.clazz_id
            let putage  = this.ctx.request.body.putstudentage
            let putsex = this.ctx.request.body.studentsex
            let row = {
                studentname: putstudentname,
                clazz_id: clazz_id,
                age:putage,
                sex:putsex,
            },
                options = {
                    where: {
                        id: id
                    }
                }
            await this.app.model.Students.update(row, options);
            return {
                code:20000,
                data:studentList
            }
        }catch(error){
            return{
                code:20000,
                data:"失败"
            }
        }
    }
}

module.exports = UserService;