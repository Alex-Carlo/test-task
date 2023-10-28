import { Component } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})

export class BannerComponent {
  categories = [
    {
      img: '/assets/images/products/mushrooms.png',
      name: 'Dried Magic Mushrooms'
    },
    {
      img: '/assets/images/products/shrom-edibles.png',
      name: 'Shrom Edibles'
    },
    {
      img: '/assets/images/products/magic-mushrooms.png',
      name: 'Magic Musrooms Tea'
    },
    {
      img: '/assets/images/products/microdosing-capsules.png',
      name: 'Microdosing Capsules'
    },
  ]
}
