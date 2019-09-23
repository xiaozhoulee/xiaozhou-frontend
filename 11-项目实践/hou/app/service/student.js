const Service = require('egg').Service;

class UserService extends Service {
    async getStudentlist() {
        const studentList = await this.app.model.Students.findAll({
            include: [{  //联查班级的数据
                model: this.app.model.Clazz,
                as: 'clazz'
            }]
        });
        return studentList
    }
    async insertStudentlist() {
        let studentname = this.ctx.request.body.studentname
        let clazz_id = this.ctx.request.body.clazz_id
        const student = {
            name: studentname,
            clazz_id: clazz_id
        }
        await this.app.model.Students.create(student);
        const studentList = await this.app.model.Students.findAll({
            include: [{  //联查班级的数据
                model: this.app.model.Clazz,
                as: 'clazz'
            }]
        });
        return studentList
    }
    async deleteStudentlist() {
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
        return studentList
    }
    async putStudentlist() {
        const studentList = await this.app.model.Students.findAll({
            include: [{  //联查班级的数据
                model: this.app.model.Clazz,
                as: 'clazz'
            }]
        });
        let putstudentname = this.ctx.request.body.putstudentname
        let id = this.ctx.params.id
        let clazz_id = this.ctx.request.body.clazz_id
        let row = {
            name: putstudentname,
            clazz_id: clazz_id
        },
            options = {
                where: {
                    id: id
                }
            }
        await this.app.model.Students.update(row, options);
        return studentList
    }
}

module.exports = UserService;