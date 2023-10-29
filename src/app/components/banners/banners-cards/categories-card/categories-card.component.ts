import { Component, Input } from "@angular/core";

@Component({
  selector: "app-categories-card",
  templateUrl: "./categories-card.component.html",
  styleUrls: ["./categories-card.component.scss"]
})

export class CategoriesCardComponent {
  @Input() name: string | undefined;
  @Input() src!: string;
}
