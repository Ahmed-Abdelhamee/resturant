import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  language: string = "English";

  flagSrc: string = "assets/amerca.png";

  chooseLanguage(flag: string, item: string) {
    this.language = item;
    this.flagSrc = flag
  }

  // @Output() globalEmit: EventEmitter<string> = new EventEmitter()

  // click() {
  //   this.globalEmit.emit("hello")
  //   console.log("asd")
  // }

  // arr:any[]=[];

  // asd(){
  //   this.arr.push("asdasd")
  // }
}
