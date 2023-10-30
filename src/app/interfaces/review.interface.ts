import { CardData } from "./card.interface";

export interface Review extends CardData {
    id: number;
    avatar: string;
    name: string;
}