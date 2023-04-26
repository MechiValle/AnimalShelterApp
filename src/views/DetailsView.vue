<script setup>
import pets from "../data/adoptAPet.json"
import { useRoute, RouterView, useRouter } from "vue-router"
import ContactView from "../views/ContactView.vue"

const route = useRoute()
const router = useRouter()
const petId = parseInt(route.params.id)
const pet = pets.find(p => p.id === petId)
</script>

<template>
  <div class="card-container">
    <RouterLink to="/" class="back">&#10005</RouterLink>
      <div class="details-container">
        <div class="details-text">
           <h1>{{ pet.name }}</h1>
           <h3>{{ pet.breed }}</h3>
           <p><span class="prompt">Age: </span>{{ pet.details.age }}</p>
           <p><span class="prompt">Weight:</span> {{ pet.details.weight }}</p>
           <p><span class="prompt">Will it get bigger?:</span> {{ pet.details.willItGetBigger }}</p>
          <p><span class="prompt">Does it get along with other pets?:</span> {{ pet.details.goodWithAnimals }}</p>
          <p><span class="prompt">Does it get along with children?:</span> {{ pet.details.goodWithKids }}</p>
          <button @click="router.push(`/adopt/${petId}/contact`)"><h2>Contact</h2></button>
      <RouterView />
      </div>
  <img :src="pet.img">
  </div>
    </div>
</template>

<style scoped>
.card-container{
  width: 900px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  align-items: inherit;
}

.back{
  align-self: flex-end;
  justify-self: flex-start;
  margin-right: 50px;
  margin-bottom: 40px;
  margin-top: 30px;
  text-decoration: none;
  background-color: #1C6758;
  padding: 2px 8px;
}

.back:visited{
  color:white;
}

.details-container{
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
}
.details-text h3{
  margin-bottom: 30px;
  font-weight: bold;
  color: rgba(0,0,0,0.5)
}

.details-text .prompt{
  font-weight: bold;
}

.details-text button{
  font-weight: bold;
  background-color: #1C6758;
  align-self: center;
  border: none;
  margin: none;
  width: 100px;
  height: 50px;
  color: #FAFAFA;
  margin-top: 20px;
}

img{
  width: 450px;
  object-fit: scale-down;
  margin: 0;
  border: 10px solid rgba(0,0,0,0.3);
  border-radius: 15px;
}

</style>