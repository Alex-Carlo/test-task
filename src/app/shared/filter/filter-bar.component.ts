import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.scss"]
})

export class FilterBarComponent implements OnInit {
  @Input() filters = ['All', 'Aphrodisiac', 'Cognitive', 'Energy', 'Immune Support', 'Pure Mushroom', 'Trip Stopper'];
  constructor() {

  }

  ngOnInit() {

  }
}
