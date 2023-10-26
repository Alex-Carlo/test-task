import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-ads-card",
  templateUrl: "./ads-card.component.html",
  styleUrls: ["./ads-card.component.scss"]
})

export class AdsCardComponent implements OnInit {
  @Input() type = 'orange';
  isOrange = false;
  configType!: CardData;
  constructor() {

  }

  ngOnInit() {
    this.isOrange = this.type === 'orange';
    this.configType = {
      img: this.isOrange ? '/assets/images/icons/icon-ads.svg' : '/assets/images/icons/icon-delivery-van.svg',
      title: this.isOrange ? 'Get 20% Off' : 'Free Express',
      titleSecond: this.isOrange ? 'Your 1st Order' : 'Shipping',
      content: this.isOrange ? 'You get over' : 'Orders above',
      footer: this.isOrange ? 'Coupon Code' : 'Discreet, Undetectable'
    };
  }
}

interface CardData {
  img: string;
  title: string;
  titleSecond: string;
  content: string;
  footer: string;
}
