import { Component } from '@angular/core';
import { globalCustomOptions } from '../modules/global-ts-files/owl-variable';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-resturant',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterModule],
  templateUrl: './all-resturant.component.html',
  styleUrls: ['./all-resturant.component.scss', '.././modules/styles/global.css', '.././modules/styles/global2.css']
})
export class AllResturantComponent {

  customOptions: any= globalCustomOptions;

  owl: any = [
    {title: "اسم المطعم", img: "assets/resturants/1.png" },
    {title: "اسم المطعم", img: "assets/resturants/2.png" },
    {title: "اسم المطعم", img: "assets/resturants/3.png" },
    {title: "اسم المطعم", img: "assets/resturants/4.png" },
    {title: "اسم المطعم", img: "assets/resturants/5.png" },
    {title: "اسم المطعم", img: "assets/resturants/1.png" },
    {title: "اسم المطعم", img: "assets/resturants/2.png" },
    {title: "اسم المطعم", img: "assets/resturants/3.png" },
    {title: "اسم المطعم", img: "assets/resturants/4.png" },
    {title: "اسم المطعم", img: "assets/resturants/5.png" },
  ]
}

