import { Component } from '@angular/core';
import { globalCustomOptions } from '../modules/global-ts-files/owl-variable';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '.././modules/styles/global.css']
})
export class HomeComponent {

  customOptions: any= globalCustomOptions;

  owl: any = [
    {title: "اسم الدولة", img: "assets/countries/1.png" },
    {title: "تركيا", img: "assets/countries/2.png" },
    {title: "لبنان", img: "assets/countries/3.png" },
    {title: "عمان", img: "assets/countries/4.png" },
    {title: "اسم الدولة", img: "assets/countries/5.png" },
    {title: "اسم الدولة", img: "assets/countries/1.png" },
    {title: "تركيا", img: "assets/countries/2.png" },
    {title: "لبنان", img: "assets/countries/3.png" },
    {title: "عمان", img: "assets/countries/4.png" },
    {title: "اسم الدولة", img: "assets/countries/5.png" },
  ]
}

