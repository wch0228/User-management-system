<template>
  <div class="HomePage container">
    <Alert v-if="success" :receive="success"></Alert>
    <!--判断success是否为真，假不显示 :receive="success"是父组件给子组件（Alert）传值-->
    <input type="text" class="form-control" placeholder="搜索" v-model="selectInput" />
    <h1 class="page-header">用户管理系统</h1>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>电子邮箱</th>
          <th>年龄</th>
        </tr>
      </thead>

      <tbody>
        <!-- 搜索：触发filterBy()方法，第一个值是整个数组，第二个值是搜索v-model的值 -->
        <tr v-for="(item,index) in filterBy(items,selectInput)" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.age}}</td>
          <td>
            <!-- 这里的to需要v-bind绑定才能是表达式 item是v-for渲染出来的，mian.js也要path:"/item/:id"才能绑定id值（坑）-->
            <router-link class="btn btn-default" :to="'/item/'+item.id">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
export default {
  name: "HomePage",
  data() {
    return {
      items: [],
      success: "",
      selectInput: ""
    };
  },
  methods: {
    // 实参接受参数，
    filterBy(items, value) {
      // filter()是ES6语法遍历数组，通过match()把item.name值与搜索框值进行匹配
      return items.filter(function(item) {
        return item.name.match(value);
      });
    }
  },
  created() {
    this.axios.get("http://localhost:3000/users").then(res => {
      this.items = res.data;
    });
    //判断是否接收到参数判断并赋值给success
    if (this.$route.query.alert) {
      this.success = this.$route.query.alert;
    }
  },
  components: {
    Alert
  }
};
</script>

<style  scoped>
</style>