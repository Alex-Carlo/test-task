import { Component, Input, OnInit } from "@angular/core";
import { CardData } from "src/app/interfaces/card.interface";

@Component({
  selector: "app-ads-card",
  templateUrl: "./ads-card.component.html",
  styleUrls: ["./ads-card.component.scss"]
})

export class AdsCardComponent implements OnInit {
  @Input() type = 'orange';
  isOrange = false;
  configType!: CardData;

  ngOnInit() {
    this.isOrange = this.type === 'orange';
    this.configType = {
      image: this.isOrange ? '/assets/images/icons/icon-ads.svg' : '/assets/images/icons/icon-delivery-van.svg',
      title: this.isOrange ? 'Get 20% Off' : 'Free Express',
      titleSecond: this.isOrange ? 'Your 1st Order' : 'Shipping',
      content: this.isOrange ? 'You get over' : 'Orders above',
      footer: this.isOrange ? 'Coupon Code' : 'Discreet, Undetectable'
    };
  }
}
