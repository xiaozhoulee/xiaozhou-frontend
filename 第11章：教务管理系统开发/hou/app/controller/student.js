'use strict';

const Controller = require('egg').Controller;

class StudentsController extends Controller {
    // 联查学生信息
    async get() {
        const studentList = await this.ctx.service.student.getStudentlist();
        this.ctx.body = studentList
    }
    async create() {
        const studentList = await this.ctx.service.student.insertStudentlist();
        this.ctx.body = studentList
    }
    async destroy() {
        const studentList = await this.ctx.service.student.deleteStudentlist();
        this.ctx.body = studentList

    }
    async update() {
        const studentList = await this.ctx.service.student.putStudentlist();
        this.ctx.body = studentList
    }
}

module.exports = StudentsController;
