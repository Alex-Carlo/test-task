
import { Component } from "@angular/core";
import { PRODUCTS_STUB } from "src/app/services/stub-data/stub-data";

@Component({
  selector: "app-shop-products",
  templateUrl: "./shop-products.component.html",
  styleUrls: ["./shop-products.component.scss"]
})

export class ShopProductsComponent {
  products = PRODUCTS_STUB;
}
