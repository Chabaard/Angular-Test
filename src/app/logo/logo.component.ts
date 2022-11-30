import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  // function permettant de faire un resize de l'objet (logo)
  // dès que l'event windows.resize est effectué
  onResize() {
    const reSize = function () {
      const logo: HTMLElement = document.getElementById("logo")!;
      // condition afin de savoir si la Width ou la Height est la plus grande
      // comme ça je règle la taille selon l'un ou l'autre
      if (window.innerWidth <= window.innerHeight) {
        logo.style.width = window.innerWidth/2 +"px";
        logo.style.height = window.innerWidth/2 +"px";
      } else {
        logo.style.width = window.innerHeight/2+"px";
        logo.style.height = window.innerHeight/2+"px";
      }
    };
    // Je lance la function
    reSize();
  }
  //Je resize à l'initialisation du component
  ngOnInit(): void {
    this.onResize();
  }

}
