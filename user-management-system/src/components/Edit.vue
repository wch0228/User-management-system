<template>
  <div class="edit container">
    <Alert v-if="success" :receive="success"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form>
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for="exampleInputEmail1">姓名</label>
          <!-- 双向绑定表单数据 -->
          <input type="text" placeholder="姓名" v-model="edit.name" class="form-control input-lg" />
          <label for="exampleInputEmail1">电话号码</label>
          <input type="text" placeholder="电话号码" v-model="edit.phone" class="form-control input-lg" />
          <label for="exampleInputEmail1">电子邮箱</label>
          <input type="text" placeholder="电子邮箱" v-model="edit.email" class="form-control input-lg" />
          <label for="exampleInputEmail1">年龄</label>
          <input type="text" placeholder="年龄" v-model="edit.age" class="form-control input-lg" />
          <label for="exampleInputEmail1">学校</label>
          <input type="text" placeholder="学校" v-model="edit.school" class="form-control input-lg" />
          <label for="exampleInputEmail1">校训</label>
          <input type="text" placeholder="校训" v-model="edit.slogan" class="form-control input-lg" />
        </div>
        <button type="submit" class="btn btn-default" @click="editUser">编辑</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "edit",
  data() {
    return {
      edit: {},
      success: ""
    };
  },
  components: {
    Alert
  },
  created() {
    //通过生命周期created调用axiosEdit记得加this，this.$route.params.id获取到父级的ID（实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。）
    this.axiosEdit(this.$route.params.id);
  },
  methods: {
    //通过get请求获取到ID之后在把拼接后的ID值赋给edit
    axiosEdit(id) {
      this.axios.get("http://localhost:3000/users/" + id).then(res => {
        this.edit = res.data;
      });
    },
    //   先判断文本框是否为空，空值提醒。没有空的话获取到数据进行post请求把数据传给http://localhost:3000/users（axios需要添加this）
    editUser(e) {
      if (
        !this.edit.name ||
        !this.edit.phone ||
        !this.edit.email ||
        !this.edit.age
      ) {
        this.success = "用户信息不能为空";
      } else {
        //   axios修改
        this.axios
          .put(
            "http://localhost:3000/users/" + this.$route.params.id, // this.$route.params.id获取到父级的ID值
            this.edit
          ) //第二个不需要是对象了，put的数据给谁就可以了
          .then(res => {
            // console.log(res);
            this.$router.push({
              path: "/",
              query: { alert: "用户信息编辑成功!" } //传入参数 query后面是一个对象
            });
          });
      }
      e.preventDefault(); //阻止默认事件
    }
  }
};
</script>

<style scoped>
</style>