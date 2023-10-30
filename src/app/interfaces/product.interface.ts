import { CardData } from "./card.interface";

export interface Product extends CardData {
    id: number;
    price: number;
    type: string | null;
}