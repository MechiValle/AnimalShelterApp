<script setup>
import p from "../data/adoptAPet.json"
import { ref } from "vue";
import { RouterLink } from "vue-router"

const pets = ref(p)
</script>

<template>
  <div class="cards-container">
    <RouterLink :to="`/adopt/${pet.id}`" v-for="pet in pets" :key="pet.id" class="card">
      <img :src="pet.img">
      <div class="details">
        <h2>{{ pet.name }}</h2>
        <p>{{ pet.breed }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

.cards-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(225,225,225,0.5);
  border-radius: 15px;
  padding-top: 30px;
  padding-bottom: 30px;

}
.card{
  width: 310px;
  overflow: hidden;
  border-radius: 6%;
  border: 4px solid rgba(0,0,0,0.1);
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.card img{
  width: 100%;
  height: 220px;
  margin: 0;
}

.card .details{
  padding: 0 5px;
  text-decoration: none;
}

.card .details h2{
  font-weight: bold;
}

a{
  text-decoration: none;
  color: inherit;
}

</style>