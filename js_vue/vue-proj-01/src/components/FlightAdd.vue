<script setup lang="ts">
import {useRouter} from "vue-router";
import {useFlightsStore} from "../store";
import {Flight} from "../types/flight.ts";
import FlightForm from "./FlightForm.vue";
const state = useFlightsStore();
const router = useRouter();
const onSubmit = (flight: Flight) => {
  state.addFlight(flight.name, flight.departure, flight.destination);
  router.push("/");
}
</script>

<template>
  <h2>Creating new record</h2>
  <flight-form @submit="onSubmit" @cancel="router.push('/')" />
</template>

<style scoped>
  h2 {
    text-align: center;
    color: #b1ffdc;
  }
</style>