import { Component, Input } from "@angular/core";
import { CardData } from "src/app/interfaces/card.interface";


interface Perk extends CardData {
  price: number;
}
@Component({
  selector: "app-perk-card",
  templateUrl: "./perk-card.component.html",
  styleUrls: ["./perk-card.component.scss"]
})

export class PerkCardComponent {
  @Input() perk: Perk | undefined;

}
