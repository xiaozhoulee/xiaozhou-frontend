'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('register');
  }
  async hallo() {
    const { ctx } = this;
    const clazzList = await this.app.model.Clazz.findAll();
    ctx.body = clazzList;
  //  await this.ctx.render('hallo.html',{
  //     msg:"abcccccc"
  //   })
  }
  async insert() {
    const { ctx } = this;
    const clazzList = await this.app.model.Clazz.findAll();
    let name = this.ctx.request.body.name;
    // let name = this.ctx.request.body.name;
    // list.push(name);
    // console.log(list)
    // this.list = list
    // const body = this.ctx.request.body;
    const clazz = {
        name:name
    }
    await this.app.model.Clazz.create(clazz);
    // clazzList.push(name)
    ctx.body = clazzList;
  //  await this.ctx.render('hallo.html',{
  //     msg:"abcccccc"
  //   })
  }

  // async destroy() {
  //   const { ctx } = this;
  //   const clazzList = await this.app.model.Clazz.findAll();
  //   // let id = this.ctx.params.index;
  //   // const eid = this.request.body.clazz_id;
  //    // 自己探索法
  //   // let id = this.ctx.request.body.index;
  //   // 老李获取法
  //   let id = this.ctx.params.id;
  //   // console.log(66666666666)
  //   // var num = Number(id)+2
  //   console.log(7777)
  //   console.log(id)
  //   // console.log(list)
  //   console.log(8888)
  //   // console.log(eid)
  //   // console.log(num)
  //   console.log(999)
  // //   // list.splice(id,1); //删除数据
  //   const student = await this.app.model.Clazz.findOne({
  //     where: {
  //         id: id
  //     }
  // });
  // // let idid = id,;
  // student.destroy();
  //   ctx.body = clazzList;
  // }
  async destroy() {
    const { ctx } = this;
    const clazzList = await this.app.model.Clazz.findAll();
    // let id = this.ctx.params.index;
    // const eid = this.request.body.clazz_id;
     // 自己探索法
    // let id = this.ctx.request.body.index;
    // 老李获取法
    let id = this.ctx.params.id;
    // console.log(66666666666)
    // var num = Number(id)+2
    console.log(7777)
    // console.log(id)
    // console.log(list)
    console.log(8888)
    // console.log(eid)
    // console.log(num)
    console.log(999)
  //   // list.splice(id,1); //删除数据
  // let dname = this.ctx.request.body.dname;
    const student = await this.app.model.Clazz.findOne({
      where: {
          id:id
      }
  });
  // let idid = id,;
  student.destroy();
    ctx.body = clazzList;
  }
  async putclazz() {
    const { ctx } = this;
    let id = this.ctx.params.id;
    console.log(2222)
    console.log(id)
    // console.log(id)
    console.log(2222)
    // let putstu = this.ctx.params.putstu;
    // this.ctx.request.body  
    let putclazz = this.ctx.request.body.putclazz
    console.log(putclazz)
    console.log(99999)
    // const userInfo = await ctx.service.user.find(id);
    const clazzList = await this.app.model.Clazz.findAll();
    let row = {
      name:putclazz
    },
    options = {
      where:{
        id:id
      }
    }
    await this.app.model.Clazz.update( row, options);
    // const putstu = await this.app.model.Students.findOne(
    //   {
    //     where:{
    //       id:id
    //     }
    //   }
    // )
  
    // const result = await this.app.mysql.update('Students', row); // 更新 posts 表中的记录
    // ctx.body= studentList
    ctx.body = clazzList
  }









  // async student() {
  //   const { ctx } = this;
  //   const clazzList = await this.app.model.Clazz.findAll();
  //   ctx.body = clazzList;
  // //  await this.ctx.render('hallo.html',{
  // //     msg:"abcccccc"
  // //   })
  // }
  async student() {
    const studentList = await this.app.model.Students.findAll({
        include:[{  //联查班级的数据
            model:this.app.model.Clazz,
            as:'clazz'
        }]
    });
    this.ctx.body=studentList
}
async insertStu() {
  // const name = this.ctx.params.name
  let body = this.ctx.request.body
  let name = body.name
  let clazz_id = body.clazz_id
  console.log(name)
  console.log(9999)
  // let claz = this.ctx.params.claz
  // let claz = this.ctx.request.body.claz;
  console.log(clazz_id)
  console.log(8228)
  const instu = {
    name:name,
    clazz_id:clazz_id
  }
  await this.app.model.Students.create(instu);
  // ctx.body=studentList
}

async deleteStu() {
  const { ctx } = this;
  const studentList = await this.app.model.Students.findAll();
  // let id = this.ctx.params.index;
  // const eid = this.request.body.clazz_id;
   // 自己探索法
  // let id = this.ctx.request.body.index;
  // 老李获取法
  let id = this.ctx.params.id;
  console.log(7777)
  console.log(id)
  console.log(8888)
  console.log(999)
//   // list.splice(id,1); //删除数据
// let dname = this.ctx.request.body.dname;
  const student = await this.app.model.Students.findOne({
    where: {
        id:id
    }
});
// let idid = id,;
student.destroy();
  ctx.body = studentList;
}
async putStu() {
  const { ctx } = this;
  let id = this.ctx.params.id;
  console.log(2222)
  console.log(id)
  // console.log(id)
  console.log(2222)
  // let putstu = this.ctx.params.putstu;
  // this.ctx.request.body  
  let putstu = this.ctx.request.body.putstu
  console.log(putstu)
  console.log(99999)
  // const userInfo = await ctx.service.user.find(id);
  const studentList = await this.app.model.Students.findAll();
  let row = {
    name:putstu
  },
  options = {
    where:{
      id:id
    }
  }
  await this.app.model.Students.update( row, options);
  // const putstu = await this.app.model.Students.findOne(
  //   {
  //     where:{
  //       id:id
  //     }
  //   }
  // )

  // const result = await this.app.mysql.update('Students', row); // 更新 posts 表中的记录
  // ctx.body= studentList
  ctx.body = studentList
}
async putclazzs() {
  const { ctx } = this;
  let id = this.ctx.params.id;
  console.log(2222)
  console.log(id)
  // console.log(id)
  console.log(2222)
  // let putstu = this.ctx.params.putstu;
  // this.ctx.request.body  
  let clazzId = this.ctx.request.body.clazzId
  console.log(clazzId)
  console.log(99999)
  // const userInfo = await ctx.service.user.find(id);
  const studentList = await this.app.model.Students.findAll();
  let row = {
    clazz_id:clazzId
  },
  options = {
    where:{
      id:id
    }
  }
  await this.app.model.Students.update( row, options);
  // const putstu = await this.app.model.Students.findOne(
  //   {
  //     where:{
  //       id:id
  //     }
  //   }
  // )

  // const result = await this.app.mysql.update('Students', row); // 更新 posts 表中的记录
  // ctx.body= studentList
  ctx.body = studentList
}


}

module.exports = HomeController;
