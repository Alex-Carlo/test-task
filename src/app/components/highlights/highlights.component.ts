import { Component } from "@angular/core";
import { Observable, combineLatest, map, of } from "rxjs";
import { ResponsiveService } from "src/app/services/responsive.service";
import { REVIEWS_STUB } from "src/app/services/stub-data/stub-data";
import { SwiperOptions } from "swiper/types";

@Component({
  selector: "app-highlights",
  templateUrl: "./highlights.component.html",
  styleUrls: ["./highlights.component.scss"]
})

export class HighlightsComponent {

  hasBreakLine$: Observable<boolean> = combineLatest([
    this.responsiveService.isSmallScreen(),
    this.responsiveService.isLargeScreen()
  ]).pipe(
    map((res) => res.some((item: boolean) => item === true))
  );

  reviews$: Observable<string[]> = of(REVIEWS_STUB).pipe(map((res) => res.map((item: any) => item.avatar)));

  swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    effect: "flip",
    flipEffect: {
      slideShadows: true,
    },
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  }

  constructor(private responsiveService: ResponsiveService) { }

  getItem(avatar: string) {
    return REVIEWS_STUB.find(item => item.avatar === avatar);
  }

}
