<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the About page. Learn more about us here.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "AboutPage", // 修改为多单词
};
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 50px;
}
</style>
