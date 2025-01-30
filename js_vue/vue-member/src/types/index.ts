export enum IStatus{
    READY = "READY",
    PLAYING = "PLAYING",
    PASSED = "PASSED"
}

export interface ICard{
    id: string,
    name: ICardName,
    flipped: boolean
}

export interface IState{
    nonFlippedCards: number,
    cards: ICard[],
    status: IStatus
}

export const CARDS = [
    "angular",
    "bootstrap",
    "vite",
    "vue",
    "js",
    "css",
    "html",
    "react"
];

// export type ICardName = typeof CARDS[number];

export type ICardName = "angular" | "bootstrap" | "vite" | "vue" | "js" | "js" | "css" | "html" | "react";