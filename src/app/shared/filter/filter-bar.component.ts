import { Component, Input } from "@angular/core";
import { FILTER_OPTIONS } from "src/app/constants/common.const";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.scss"]
})

export class FilterBarComponent {
  @Input() filters = FILTER_OPTIONS;
}
