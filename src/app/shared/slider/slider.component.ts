import { AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
    @ContentChild('customize') customize!: TemplateRef<any>;
    @ViewChild('swiperContainer') swiperContainer: any;
    @Input() images!: string[] | null;
    @Input() swiperConfig: SwiperOptions = {};




    ngAfterViewInit() {
        new Swiper(this.swiperContainer.nativeElement, {
            ...this.swiperConfig,
            navigation: {
                prevEl: '.prev-btn',
                nextEl: '.next-btn'
            }
        });
    }
}