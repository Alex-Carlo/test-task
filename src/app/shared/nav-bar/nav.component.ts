import { Component } from "@angular/core";
import { CART_SVG_URL, IMAGEN_SVG_URL, LIKE_SVG_URL, NAV_ITEMS } from "../../constants/common.const";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})

export class NavComponent {
  logoUrl = IMAGEN_SVG_URL;
  menuItems = NAV_ITEMS;
  imagenUrl = LIKE_SVG_URL;
  cartUrl = CART_SVG_URL;
}
