<script setup>
import { useRoute, useRouter} from "vue-router"
import pets from "../data/adoptAPet.json"

const route = useRoute()
const router = useRouter()

const pet = pets.find(p => p.id === parseInt(route.params.id))

</script>

<template>
  <div class="fake-modal">
    <div class="modal-textbox">
      <button class="close" @click="router.push(`/adopt/${pet.id}`)">&#10005</button>
      <div class="text">
      <h1>Contact info</h1>
      <p> {{ pet.contact.phone }}</p>
      <p>{{ pet.contact.name }}</p>
    </div>
  </div>  
  </div>

</template>

<style>

.fake-modal{
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-textbox{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 300px;
  background-color: #FAFAFA;
  border-radius: 25px;
  padding: 15px;
}

.text{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.modal-textbox h1{
  margin-bottom: 10px;
}

.close{
  align-self: flex-end;
  border: none;
  background-color: #FAFAFA;
  font-weight: bold;
  font-size: 20px;
  color: #1C6758
}

</style>