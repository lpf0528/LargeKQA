<template>
  <div class="home">
    <h1>Welcome to Home Page</h1>
    <p>This is the main landing page of the app.</p>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage", // 修改为多单词
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
