
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shop-products",
  templateUrl: "./shop-products.component.html",
  styleUrls: ["./shop-products.component.scss"]
})

export class ShopProductsComponent implements OnInit {
  products = [
    {
      price: 25,
      content: 'Visionary Brew Magic Mushroom Tea',
      img: '/assets/images/products/01.png'
    },
    {
      price: 30,
      content: 'Dry Mushrooms',
      img: '/assets/images/products/04.png'
    },
    {
      price: 18,
      content: 'Pure Psilocybin',
      img: '/assets/images/products/06.png'
    },
    {
      price: 25,
      content: 'Visionary Brew Magic Mushroom Tea',
      img: '/assets/images/products/02.png'
    },
    {
      price: 30,
      content: 'Dry Mushrooms',
      img: '/assets/images/products/05.png'
    },
    {
      price: 18,
      content: 'Pure Psilocybin',
      img: '/assets/images/products/03.png'
    },

  ]
  constructor() {

  }

  ngOnInit() {

  }
}
