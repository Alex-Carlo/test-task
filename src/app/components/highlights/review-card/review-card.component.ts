import { Component, Input } from "@angular/core";

@Component({
  selector: "app-review-card",
  templateUrl: "./review-card.component.html",
  styleUrls: ["./review-card.component.scss"]
})

export class ReviewCardComponent {
  @Input() avatar!: string | undefined;
  @Input() content!: string | undefined;
}
