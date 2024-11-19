<script setup lang="ts">
import {useRouter} from "vue-router";
import { storeToRefs } from 'pinia';
import FlightItem from "./FlightItem.vue";
import {useFlightsStore} from "../store";

const router = useRouter();
const store = useFlightsStore();
const { flights } = storeToRefs(store);
const { removeFlight } = store;

function redirectForEdit(id: string) {
  return router.push(`/edit/${id}`);
}
</script>

<template>
  <nav>
    <RouterLink to="/create" class="create-link">
      <h2>Create new record</h2>
    </RouterLink>
  </nav>
  <div class="flights-list">
    <flight-item
        v-for="flight in flights"
        :flight="flight"
        :key="flight.id"
        @redirect="redirectForEdit"
        @remove="removeFlight"
    />
  </div>
</template>

<style scoped>
  .flights-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 5rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .create-link {
    display: flex;
    align-self: center;
    text-decoration: none;
    color: #b1ffdc;
  }
  .create-link > h2 {
    text-align: center;
    border: 1px solid #b1ffdc;
    border-radius: 0.2rem;
    padding: 0.5rem;
  }
  .create-link:hover > h2 {
    color: #174e33;
    background-color: #b1ffdc;
  }
</style>
