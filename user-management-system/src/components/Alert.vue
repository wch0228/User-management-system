<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{receive}}
  </div>
</template>

<script>
export default {
  name: "alert",
  props: {
    receive: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
</style>