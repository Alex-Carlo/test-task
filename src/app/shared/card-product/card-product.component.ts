import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"]
})

export class CardProductComponent implements OnInit {
  @Input() name = 'Visionary Brew Magic Mushroom Tea';
  @Input() price = '25';
  @Input() src = '/assets/images/products/01.png';
  showIcons = false;
  constructor() {

  }

  ngOnInit() {

  }
}
