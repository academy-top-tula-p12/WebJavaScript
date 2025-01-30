<script setup lang="ts">
import { storeToRefs } from 'pinia';
import GameCard from './GameCard.vue';
import { useGameStore } from '../stores';
import { ICard } from '../types';

let storeGame = useGameStore();
let { cards } = storeToRefs(storeGame);
</script>

<template>
    <GameCard v-for="card of cards"
             :card="card" />
</template>

