import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-categories-card",
  templateUrl: "./categories-card.component.html",
  styleUrls: ["./categories-card.component.scss"]
})

export class CategoriesCardComponent implements OnInit {
  @Input() name = 'Dried Magic Mushrooms';
  @Input() src = '/assets/images/products/magic-mushrooms.png';

  constructor() {

  }

  ngOnInit() {

  }

}
