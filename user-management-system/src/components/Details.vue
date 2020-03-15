<template>
  <div class="details container">
    <h1 class="pege-header">
      {{details.name}}
      <!-- 按钮右移 -->
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+details.id">编辑</router-link>
        <button class="btn btn-danger" @click="delDetails(details.id)">删除</button>
        <router-link class="btn btn-default" to="/">返回</router-link>
      </span>
    </h1>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">
          <strong class>{{details.phone}}</strong>
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-modal-window">
          <strong>{{details.email}}</strong>
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-heart-empty">
          <strong>{{details.age}}</strong>
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-oil">
          <strong>{{details.school}}</strong>
        </span>
      </li>

      <li class="list-group-item">
        <span class="glyphicon glyphicon-education">
          <strong>{{details.slogan}}</strong>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "detail", //details会报错与HTML标签冲突，坑！所以改名detail
  data() {
    return {
      details: ""
    };
  },
  methods: {
    // 获取到拼接成功的ID之后把值返回给details，
    axiosDetails(id) {
      this.axios.get("http://localhost:3000/users/" + id).then(res => {
        this.details = res.data;
      });
    },
    // 先实参接收details的ID值之后，在进行删除。query: { alert: "删除用户成功!" }传参给HomePage.vue
    delDetails(id) {
      this.axios.delete("http://localhost:3000/users/" + id).then(res => {
        // console.log(res);
        this.$router.push({ path: "/", query: { alert: "删除用户成功!" } });
      });
      // console.log(id);判断ID是否已经拿到
    }
  },
  // Vue生命周期，一上来就调用方法
  created() {
    this.axiosDetails(this.$route.params.id);
  }
};
</script>

<style scoped>
</style>