import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-resturant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.scss'
})
export class ResturantComponent {

  arr: any = [
    {title: "بيتزا", img: "assets/meals/2.png" },
    {title: "مشاوي", img: "assets/meals/1.png" },
    {title: "سندويش", img: "assets/meals/4.png" },
    {title: "سلطات", img: "assets/meals/3.png" },
    {title: "بيتزا", img: "assets/meals/5.png" },
    {title: "مشروبات", img: "assets/meals/6.png" },
  ]

}
