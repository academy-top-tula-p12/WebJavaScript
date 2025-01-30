import { ICard, CARDS, ICardName } from "../types";

function getId(length: number): string{
    let result = [];
    let alpha = "abcdefghijklmnoprstuvwxyz";
    let alphaLength = alpha.length;
    for(let i = 0; i < length; i++)
        result.push(alpha.charAt(Math.floor(Math.random() * alphaLength)));
    return result.join("");
}

export function shaffleCards(): ICard[]{
    let cards: ICard[] = [...CARDS, ...CARDS].map(item => ({
        id: getId(6),
        flipped: false,
        name: (item as ICardName)
    }));;

    for(let i = 0; i < cards.length; i++){
        let pos = Math.floor(Math.random() * i);
        let card = cards[i + 1];
        cards[i + 1] = cards[pos];
        cards[pos] = card;
    }

    return cards;
}