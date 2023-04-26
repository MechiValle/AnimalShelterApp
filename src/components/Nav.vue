<script setup>
  import { RouterLink } from "vue-router"

</script>

<template>
  <div class="navBar">
    <RouterLink active-class="active" to="/">Up for adoption</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
    <button disabled class="unavailable">Submit a pet
      <span class="unavailable-tooltip">Not available</span>

    </button>
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
  color: rgba(0, 0, 0, 0.7);
  padding: 1px 8px;
  border: 2px solid rgba(0, 0, 0, 0.7);
  border-radius: 15px;
}

.active{
  text-decoration: none;
  font-weight: 900;
  color: white;
  background-color: rgba(0,0,0,0.5);
}

.unavailable{
  color:rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 1px 8px;
  font-weight: bold;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
}

.unavailable .unavailable-tooltip{
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  transition: opacity 0.3s;
}

.unavailable:hover .unavailable-tooltip{
  visibility: visible;
  opacity: 1;
}

.unavailable .unavailable-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
}

</style>