<script setup>
  import { RouterLink } from "vue-router"

</script>

<template>
  <div class="navBar">
    <RouterLink active-class="active" to="/">Up for adoption</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
    <button class="unavailable">Submit a pet</button>
  </div>
</template>

<style scoped>

.navBar{
  margin-top: 30px;
  margin-bottom: 30px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  font-weight: bold;
  color: black;
  padding: 1px 8px;
}

.active{
  text-decoration: none;
  font-weight: 900;
  color: white;
  background-color: rgba(0,0,0,0.5);
}

.unavailable{
  background-color: rgba(255,255,255, 0.2);
  border: none;
  font-weight: bold;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
}

</style>