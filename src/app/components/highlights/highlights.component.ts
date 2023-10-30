import { Component } from "@angular/core";
import { Observable, combineLatest, map, of } from "rxjs";
import { ResponsiveService } from "src/app/services/responsive.service";
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

  reviews = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      avatar: '/assets/images/layout/profile.png',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      avatar: '/assets/images/layout/profile.png',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      avatar: '/assets/images/layout/profile.png',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      avatar: '/assets/images/layout/profile.png',
    },
  ]

  reviews$: Observable<string[]> = of(this.reviews).pipe(map((res) => res.map((item: any) => item.avatar)));

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
  }

  constructor(private responsiveService: ResponsiveService) { }

  getItemContent(avatar: string): string | undefined {
    return this.reviews.find(item => item.avatar === avatar)?.content;
  }

}
