<script setup>
  import { RouterLink } from "vue-router"

</script>

<template>
  <div class="navBar">
    <RouterLink active-class="active" to="/">Up for adoption</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>

.navBar{
  margin-top: 30px;
  margin-bottom: 30px;
  width: 300px;
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

</style>