import { Component } from "@angular/core";
import { Observable, map } from "rxjs";
import { ResponsiveService } from 'src/app/services/responsive.service';
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})

export class AboutUsComponent {

  responsive$: Observable<{
    hasBreakLine: boolean;
  }> = this.responsiveService.isSmallScreen().pipe(map((res) => ({ hasBreakLine: res })));

  constructor(private responsiveService: ResponsiveService) { }

}
