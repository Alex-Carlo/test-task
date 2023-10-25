import { Component, OnInit } from "@angular/core";
import { CART_SVG_URL, IMAGEN_SVG_URL, LIKE_SVG_URL, NAV_ITEMS } from "../../constants/nav";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})

export class FooterComponent  {
  year = new Date().getFullYear(); 
}
