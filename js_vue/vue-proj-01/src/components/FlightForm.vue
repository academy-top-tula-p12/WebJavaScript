<script setup lang="ts">
import {computed, ref, defineEmits} from "vue";
import {Flight} from "../types/flight.ts";
const props = defineProps({
  flight: {
    required: false
  }
});
const flight = ref<Flight>(props.flight as Flight ?? {
  name: "",
  departure: "",
  destination: ""
});
const emit = defineEmits<{
  (e: "submit", val: Flight): void
  (e: "cancel"): void
}>()

const isNameEmpty = computed(() => flight.value.name.length == 0);
const isDepartureEmpty = computed(() => flight.value.departure.length == 0);
const isDestinationEmpty = computed(() => flight.value.name.length == 0);
const isValid = computed(() => !isNameEmpty && !isDepartureEmpty && !isDestinationEmpty);

const handleSubmit = () => {
  if (isValid) {
    console.log(flight.value);
    emit("submit", flight.value);
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-section">
      <p>Name:</p>
      <input type="text" v-model="flight.name" required />
    </div>
    <div class="input-section">
      <p>Departure:</p>
      <input type="text" v-model="flight.departure" required >
    </div>
    <div class="input-section">
      <p>Destination:</p>
      <input type="text" v-model="flight.destination" required >
    </div>
    <div class="form-buttons">
      <button type="button" @click="emit('cancel')" class="cancel-button">Cancel</button>
      <button type="submit" class="submit-button">Apply changes</button>
    </div>

  </form>
</template>

<style scoped>
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input-section {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 1.5rem;
    color: #b1ffdc;
  }

  input {
    background: #b1ffdc;
    border: none;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    padding: 0.2rem;
  }

  .form-buttons {
    width: 25%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2rem;
  }

  button {
    height: 2rem;
    width: 45%;
  }
</style>