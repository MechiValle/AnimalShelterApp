<script setup>
import pets from "../data/adoptAPet.json"
import { useRoute } from "vue-router"

const route = useRoute()
const pet = pets.find(p => p.id === parseInt(route.params.id))
</script>

<template>
  <div class="details-container">
    <div class="details-text">
      <h1>{{ pet.name }}</h1>
    <h3>{{ pet.breed }}</h3>
    <p><span class="prompt">Age: </span>{{ pet.details.age }}</p>
    <p><span class="prompt">Weight:</span> {{ pet.details.weight }}</p>
    <p><span class="prompt">Will it get bigger?:</span> {{ pet.details.willItGetBigger }}</p>
    <p><span class="prompt">Does it get along with other pets?:</span> {{ pet.details.goodWithAnimals }}</p>
    <p><span class="prompt">Does it get along with children?:</span> {{ pet.details.goodWithKids }}</p>

    <button>Contact</button>

  </div>
  <img :src="pet.img">
  </div>
</template>

<style scoped>
.details-container{
  width: 900px;
  height: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
}

.details-text{
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.details-text h1{
  display: flex;
  font-family: "Meows";
  font-size: 3rem;
  height: 70px;
  margin-bottom: 3px;
}
.details-text h3{
  margin-bottom: 50px;
  font-weight: bold;
  color: rgba(0,0,0,0.5)

}

.details-text .prompt{
  font-weight: bold;
}

.details-text button{
  margin-top: 45px;
  font-weight: bold;
}

img{
  width: 450px;
  object-fit: scale-down;
  margin: 0;
  border: 10px solid rgba(0,0,0,0.3);
  border-radius: 15px;
}

</style>