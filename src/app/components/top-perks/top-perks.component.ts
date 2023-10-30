import { Component } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { SwiperOptions } from "swiper/types";

@Component({
  selector: "app-top-perks",
  templateUrl: "./top-perks.component.html",
  styleUrls: ["./top-perks.component.scss"]
})

export class TopPerksComponent {
  perks = [
    {
      price: 25,
      content: 'Visionary Brew Magic Mushroom Tea',
      img: '/assets/images/products/visionary-brew.png'
    },
    {
      price: 30,
      content: 'Dry Mushrooms',
      img: '/assets/images/products/mushrooms-many.png'
    },
    {
      price: 18,
      content: 'Pure Psilocybin',
      img: '/assets/images/products/pure-psilocybin.png'
    },
    {
      price: 25,
      content: 'Visionary Brew Magic Mushroom Tea',
      img: '/assets/images/products/visionary-brew.png'
    },
    {
      price: 30,
      content: 'Dry Mushrooms',
      img: '/assets/images/products/mushrooms-many.png'
    },
    {
      price: 18,
      content: 'Pure Psilocybin',
      img: '/assets/images/products/pure-psilocybin.png'
    },

  ]
  perks$: Observable<string[]> = of(this.perks).pipe(map((res) => res.map((item: any) => item.img)));

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  }

  getItem(img: string) {
    return this.perks.find(item => item.img === img);
  }
}