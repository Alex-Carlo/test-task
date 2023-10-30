import { Component, Input } from "@angular/core";
import { CardData } from "src/app/interfaces/card.interface";
interface Perk extends CardData {
  price: number;
}
@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"]
})

export class CardProductComponent {
  @Input() perk: Perk | undefined;
  @Input() isPerk = false;
}
