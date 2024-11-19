<script setup lang="ts">
import { Flight} from "../types/flight.ts";
defineProps<{ flight: Flight }>()
</script>

<template>
  <div class="flight-item">
    <div class="flight-info">
      <h2>{{flight.name}}</h2>
      <span>Departure: {{flight.departure}}</span>
      <span>Destination: {{flight.destination}}</span>
    </div>
    <div class="flight-item-buttons">
      <button
          class="flight-button-details"
          @click="$emit('redirect', flight.id)"
      >
          Details
      </button>
      <button
          class="flight-button-remove"
          @click="$emit('remove', flight.id)"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<style scoped>
  .flight-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 13rem;
    width: 13rem;
    border: solid 1px #b1ffdc;
    border-radius: 10px;
    background: rgba(177, 255, 220, 0.7);
    transition: background 0.3s ease-out;
    padding: 1rem;
  }
  .flight-item:hover {
    background: rgba(177, 255, 220, 1);
  }
  .flight-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
  }

  .flight-item-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    gap: 1rem;
  }

  .flight-button-details {
    background: none;
  }

  .flight-button-details:hover {
    background: #ffffff;
    transform: scale(1.05);
  }

  .flight-button-remove {
    background: none;
  }

  .flight-button-remove:hover {
    background: #ff9799;
  }

  button {
    font-size: 1.2rem;
    border: none;
    border-radius: 0.2rem;
    padding: 0.2rem
  }

  h2 {
    text-align: center;
    margin: 0.2rem;
  }
</style>