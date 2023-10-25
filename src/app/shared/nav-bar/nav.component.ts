import { Component, OnInit } from "@angular/core";
import { CART_SVG_URL, IMAGEN_SVG_URL, LIKE_SVG_URL, NAV_ITEMS } from "../../constants/nav";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})

export class NavComponent implements OnInit {
  logoUrl = IMAGEN_SVG_URL;
  menuItems = NAV_ITEMS;
  imagenUrl = LIKE_SVG_URL;
  cartUrl = CART_SVG_URL;
  constructor() {

  }

  ngOnInit() {

  }
}
