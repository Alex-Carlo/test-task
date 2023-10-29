import { AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
    @ContentChild('customize') customize!: TemplateRef<any>;
    @ViewChild('swiperContainer') swiperContainer: any;
    @Input() images: string[] | null = [
        '/assets/images/products/mushrooms.png',
        '/assets/images/products/shrom-edibles.png',
        '/assets/images/products/magic-mushrooms.png'
    ];




    ngAfterViewInit() {
        new Swiper(this.swiperContainer.nativeElement, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1023: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            },
            navigation: {
                prevEl: '.prev-btn',
                nextEl: '.next-btn'
            }
        });
    }
}
