<script setup>
import { RouterView } from "vue-router"
import Nav from "./components/Nav.vue";



</script>

<template>
  <div class="container">
    <header>
      <RouterLink :to="`/`"><h1>Lucky Paws</h1></RouterLink>
    <h3>Adopt a rescued friend!</h3>
      <Nav />
    </header>
    <RouterView />
    <footer class="footer">
      Copyright 1993-2023 by M. All Rights Reserved.
    </footer>
  </div>
</template>

<style scoped>

@font-face {
  font-family: "PawWow";
  src: local("PawWow"),
   url(./assets/fonts/PawWow.ttf) format("truetype");
}

@font-face {
  font-family: "Meows";
  src: local("Meows"),
   url(./assets/fonts/Meows.ttf) format("truetype");
}
.container{
  color: black;
  max-width: 2000px;
  min-height: 970px;
  margin: 0 auto;
  background-color: #1C6758;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

header{
  display: flex;
  width: 1040px;
  flex-direction: column;
  align-items: center;
  color: white;
}

header h3{
  padding: 0;
}

header h1{
  font-family: "PawWow", Helvetica, Arial;
  font-size: 10em;
  height: 200px;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

a{
  text-decoration: none;
  color: inherit;
}
</style>