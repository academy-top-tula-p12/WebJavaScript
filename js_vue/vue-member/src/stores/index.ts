import { ICard, IState, IStatus } from "../types";
import { defineStore } from "pinia";
import { shaffleCards } from "../helpers";


export const useGameStore = defineStore("gameStore", {
    state():IState {
        return {
            nonFlippedCards: 8,
            cards: shaffleCards(),
            status: IStatus.READY
        }
    } 
});
