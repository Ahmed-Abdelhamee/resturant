import { Component } from '@angular/core';
import { globalCustomOptions } from '../modules/global-ts-files/owl-variable';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterModule],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss', '.././modules/styles/global.css', '.././modules/styles/global2.css']
})
export class CityComponent {

  customOptions: any= globalCustomOptions;

  owl: any = [
    {title: "اسم المدينة", img: "assets/cities/1.png" },
    {title: "اسم المدينة", img: "assets/cities/2.png" },
    {title: "طرابزون", img: "assets/cities/3.png" },
    {title: "اسم المدينة", img: "assets/cities/4.png" },
    {title: "اسم المدينة", img: "assets/cities/5.png" },
    {title: "اسم المدينة", img: "assets/cities/1.png" },
    {title: "اسم المدينة", img: "assets/cities/2.png" },
    {title: "طرابزون", img: "assets/cities/3.png" },
    {title: "اسم المدينة", img: "assets/cities/4.png" },
    {title: "اسم المدينة", img: "assets/cities/5.png" },
  ]
}
