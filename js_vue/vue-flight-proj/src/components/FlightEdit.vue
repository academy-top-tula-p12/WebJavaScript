<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import {useRoute, useRouter} from "vue-router";
  import {useFlightsStore} from "../store";
  import FlightForm from "./FlightForm.vue";
  import {Flight} from "../types/flight.ts";

  const router = useRouter();
  const route = useRoute();
  const store = useFlightsStore();
  const { getFlightById } = storeToRefs(store);
  const flight: Flight = getFlightById.value(route.params.id[0]);

  const onSubmit = (editedFlight: Flight) => {
    store.editFlight(editedFlight);
    router.push("/");
  }

</script>
<template>
  <h2>Edit flight info</h2>
  <flight-form :flight="flight" @submit="onSubmit" @cancel="router.push('/')"/>
</template>

<style scoped>
  h2 {
    text-align: center;
    color: #b1ffdc;
  }
</style>