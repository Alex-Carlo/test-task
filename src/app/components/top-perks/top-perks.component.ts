import { Component } from "@angular/core";

@Component({
  selector: "app-top-perks",
  templateUrl: "./top-perks.component.html",
  styleUrls: ["./top-perks.component.scss"]
})

export class TopPerksComponent {
  perks = [
    {
      price: 25,
      content: 'Visionary Brew Magic Mushroom Tea',
      img: '/assets/images/products/visionary-brew.png'
    },
    {
      price: 30,
      content: 'Dry Mushrooms',
      img: '/assets/images/products/mushrooms-many.png'
    },
    {
      price: 18,
      content: 'Pure Psilocybin',
      img: '/assets/images/products/pure-psilocybin.png'
    },

  ]
}