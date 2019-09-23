<template>
  <div>
    <form action @submit="insertClazz">
      <el-button type="primary" @click="insertclazz = true">添加</el-button>
    </form>
    <el-table :data="clazzList" style="width: 100%">
      <el-table-column label="序号" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.$index }}</span>
        </template>
      </el-table-column>
      <el-table-column label="班级名称" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="editData(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delClazz(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
          <el-dialog title :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="班级名称" :label-width="formLabelWidth">
                <el-input v-model="putclazzname" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="putClazz()">确 定</el-button>
            </div>
          </el-dialog>


            <el-dialog title :visible.sync="insertclazz">
            <el-form :model="form">
              <el-form-item label="班级名称" :label-width="formLabelWidth">
                      <el-input v-model="clazzname" placeholder="请输入班级"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="insertclazz = false">取 消</el-button>
              <el-button type="primary" @click="insertClazz()">确 定</el-button>
            </div>
          </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      editDataId:"",
      dialogVisible: false,
      putclazzname: "",
      clazzname: "",
      clazzList: [],
      dialogTableVisible: false,
      insertclazz:false,
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
      formLabelWidth: "120px"
    };
  },
  methods: {
    editData(id) {
      this.dialogFormVisible = true;
      this.editDataId = id;
    },
    delClazz(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          axios
            .delete("http://127.0.0.1:7001/deleteclazz" + id, {})
            .then(res => {
              this.dialogVisible = false;
              if (res.data == "班级中存在学生，不可删除班级") {
                alert(res.data);
              } else {
                this.clazzList = res.data;
                this.getclazzList();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getclazzList() {
      axios.get("http://127.0.0.1:7001/getclazz", {}).then(res => {
        console.log(res.data);
        this.clazzList = res.data;
      });
    },
    insertClazz() {
      axios
        .post("http://127.0.0.1:7001/insertclazz", {
          name: this.clazzname
        })
        .then(res => {
          this.insertclazz = false
          this.clazzname = ""
          this.getclazzList();
          console.log(res.data);
          this.clazzList = res.data;
        });
    },
    putClazz() {
      axios
        .put("http://127.0.0.1:7001/putclazz" + this.editDataId, {
          putclazzname: this.putclazzname
        })
        .then(res => {
          this.dialogFormVisible = false;
          this.clazzList = res.data;
          this.getclazzList()
          this.putclazzname = ""
        });
    }
  },
  created() {
    this.getclazzList();
  }
};
</script>