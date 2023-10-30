import { Item } from "src/app/interfaces/item.interface"
import { Product } from "src/app/interfaces/product.interface"
import { Review } from "src/app/interfaces/review.interface"


export const REVIEWS_STUB: Review[] = [
    {
        id: 0,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        avatar: '/assets/images/layout/profile.png',
        name: 'Jone Doe',
    },
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        avatar: '/assets/images/layout/profile1.png',
        name: 'Mary Jane'
    },
]

export const CATAGORIES_STUB: Item[] = [
    {
        image: '/assets/images/products/mushrooms.png',
        name: 'Dried Magic Mushrooms'
    },
    {
        image: '/assets/images/products/shrom-edibles.png',
        name: 'Shrom Edibles'
    },
    {
        image: '/assets/images/products/magic-mushrooms.png',
        name: 'Magic Musrooms Tea'
    },
    {
        image: '/assets/images/products/microdosing-capsules.png',
        name: 'Microdosing Capsules'
    },
]

export const PRODUCTS_STUB: Product[] = [
    {
        id: 0,
        price: 25,
        content: 'Visionary Brew Magic Mushroom Tea',
        image: '/assets/images/products/01.png',
        type: null
    },
    {
        id: 1,
        price: 30,
        content: 'Dry Mushrooms',
        image: '/assets/images/products/04.png',
        type: null
    },
    {
        id: 2,
        price: 18,
        content: 'Pure Psilocybin',
        image: '/assets/images/products/06.png',
        type: null
    },
    {
        id: 3,
        price: 25,
        content: 'Visionary Brew Magic Mushroom Tea',
        image: '/assets/images/products/02.png',
        type: null
    },
    {
        id: 4,
        price: 30,
        content: 'Dry Mushrooms',
        image: '/assets/images/products/05.png',
        type: null
    },
    {
        id: 5,
        price: 18,
        content: 'Pure Psilocybin',
        image: '/assets/images/products/03.png',
        type: null
    },
    {
        id: 6,
        price: 25,
        content: 'Visionary Brew Magic Mushroom Tea',
        image: '/assets/images/products/visionary-brew.png',
        type: 'Perk'
    },
    {
        id: 7,
        price: 30,
        content: 'Dry Mushrooms',
        image: '/assets/images/products/mushrooms-many.png',
        type: 'Perk'
    },
    {
        id: 8,
        price: 18,
        content: 'Pure Psilocybin',
        image: '/assets/images/products/pure-psilocybin.png',
        type: 'Perk'
    },
    {
        id: 9,
        price: 25,
        content: 'Visionary Brew Magic Mushroom Tea',
        image: '/assets/images/products/visionary-brew.png',
        type: 'Perk'
    },
    {
        id: 10,
        price: 30,
        content: 'Dry Mushrooms',
        image: '/assets/images/products/mushrooms-many.png',
        type: 'Perk'
    },
    {
        id: 11,
        price: 18,
        content: 'Pure Psilocybin',
        image: '/assets/images/products/pure-psilocybin.png',
        type: 'Perk'
    },

]