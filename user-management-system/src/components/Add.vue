<template>
  <div class="add container">
    <Alert v-if="success" :receive="success"></Alert>
    <h1 class="page-header">添加用户</h1>
    <form>
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for="exampleInputEmail1">姓名</label>
          <!-- 双向绑定表单数据 -->
          <input type="text" placeholder="姓名" v-model="formData.name" class="form-control input-lg" />
          <label for="exampleInputEmail1">电话号码</label>
          <input
            type="text"
            placeholder="电话号码"
            v-model="formData.phone"
            class="form-control input-lg"
          />
          <label for="exampleInputEmail1">电子邮箱</label>
          <input
            type="text"
            placeholder="电子邮箱"
            v-model="formData.email"
            class="form-control input-lg"
          />
          <label for="exampleInputEmail1">年龄</label>
          <input type="text" placeholder="年龄" v-model="formData.age" class="form-control input-lg" />
          <label for="exampleInputEmail1">学校</label>
          <input
            type="text"
            placeholder="学校"
            v-model="formData.school"
            class="form-control input-lg"
          />
          <label for="exampleInputEmail1">校训</label>
          <input
            type="text"
            placeholder="校训"
            v-model="formData.slogan"
            class="form-control input-lg"
          />
        </div>
        <button type="submit" class="btn btn-default" @click="AddUser">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "add",
  data() {
    return {
      formData: {},
      success: ""
    };
  },
  components: {
    Alert
  },
  methods: {
    //   先判断文本框是否为空，空值提醒。没有空的话获取到数据进行post请求把数据传给http://localhost:3000/users（axios需要添加this）
    AddUser(e) {
      if (
        !this.formData.name ||
        !this.formData.phone ||
        !this.formData.email ||
        !this.formData.age
      ) {
        this.success = "用户信息不能为空";
      } else {
        this.axios
          .post("http://localhost:3000/users", this.formData) //第二个不需要是对象了，post的数据给谁就可以了
          .then(res => {
            // console.log(res);
            this.$router.push({
              path: "/",
              query: { alert: "用户信息添加成功!" } //传入参数 query后面是一个对象
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