import { Component } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { CATAGORIES_STUB } from "src/app/services/stub-data/stub-data";
import { SwiperOptions } from "swiper/types";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})

export class BannerComponent {

  categories$: Observable<string[]> = of(CATAGORIES_STUB).pipe(map((res) => res.map((item: any) => item.image)));

  getItemName(image: string): string | undefined {
    return CATAGORIES_STUB.find(item => item.image === image)?.name;
  }

  carouselConfig: SwiperOptions = {
    effect: "cards",
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

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
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  }
}


