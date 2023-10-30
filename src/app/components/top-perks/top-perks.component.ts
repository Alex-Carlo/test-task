import { Component } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { PERKS_STUB } from "src/app/services/stub-data/stub-data";
import { SwiperOptions } from "swiper/types";

@Component({
  selector: "app-top-perks",
  templateUrl: "./top-perks.component.html",
  styleUrls: ["./top-perks.component.scss"]
})

export class TopPerksComponent {

  perks$: Observable<string[]> = of(PERKS_STUB).pipe(map((res) => res.map((item: any) => item.img)));

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
    return PERKS_STUB.find(item => item.img === img);
  }
}
