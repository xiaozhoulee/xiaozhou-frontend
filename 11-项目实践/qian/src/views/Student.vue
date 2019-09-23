<template>
  <div id='student'>
    <MenuList></MenuList>
    <el-dialog title :visible.sync="insertstudent">
      <el-form :model="form">
        <el-form-item label="学生名称" :label-width="formLabelWidth">
          <el-input v-model="studentname" placeholder="请输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item label="学生班级" :label-width="formLabelWidth">
          <el-select v-model="clazz_id" placeholder="请选择班级">
            <el-option v-for="item in clazzList" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="insertstudent = false">取 消</el-button>
        <el-button type="primary" @click="insertStudent()">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="primary" @click="insertstudent = true">添加</el-button>

    <el-table :data="studentList" style="width: 80%">
      <el-table-column label="序号" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.$index }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学生名称" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="所在班级" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.clazz.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="put(scope.row.id)">编辑</el-button>

          <el-button size="mini" type="danger" @click="open(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="学生名称" :label-width="formLabelWidth">
          <el-input v-model="putstudentname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生班级" :label-width="formLabelWidth">
          <el-select v-model="clazz_id" placeholder="请选择班级">
            <el-option v-for="item in clazzList" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="putstudent()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue";

import { create } from "domain";
import axios from "axios";
export default {
  data() {
    name:'student'
    return {
      insertstudent: false,
      putid: "",
      putstudentname: "",
      dialogVisible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      studentname: "",
      clazz_id: "",
      clazzList: [],
      studentList: [],
      value: ""
    };
  },
  methods: {
    put(id) {
      this.dialogFormVisible = true;
      this.putid = id;
    },
    open(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          axios
            .delete("http://127.0.0.1:7001/deletestudent" + id, {})
            .then(res => {
              (this.dialogVisible = false), this.getstudentList();
              this.getclazzList();
              console.log(res.data);
              this.studentList = res.data;
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getclazzList() {
      axios.get("http://127.0.0.1:7001/getclazz", {}).then(res => {
        console.log(res.data);
        this.clazzList = res.data;
      });
    },
    getstudentList() {
      axios.get("http://127.0.0.1:7001/getstudent", {}).then(res => {
        console.log(res.data);
        this.studentList = res.data;
      });
    },
    insertStudent() {
      axios
        .post("http://127.0.0.1:7001/insertstudent", {
          studentname: this.studentname,
          clazz_id: this.clazz_id
        })
        .then(res => {
          this.getstudentList();
          console.log(res.data);
          this.studentList = res.data;
          this.insertstudent = false;
          this.studentname = "";
          this.clazz_id = "";
        });
    },
    putstudent() {
      axios
        .put("http://127.0.0.1:7001/putstudent" + this.putid, {
          putstudentname: this.putstudentname,
          clazz_id: this.clazz_id
        })
        .then(res => {
          (this.dialogFormVisible = false), this.getstudentList();
          console.log(res.data);
          this.studentList = res.data;
          this.putstudentname = "";
          this.clazz_id = "";
        });
    }
  },
  components: { MenuList },

  created() {
    this.getclazzList(), this.getstudentList();
  }
};
</script>
