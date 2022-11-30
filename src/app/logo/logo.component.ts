import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyPopUpCustomComponent } from '../my-pop-up-custom/my-pop-up-custom.component';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private dialogRef : MatDialog){}

  openDialog(event: Event){
    event.preventDefault();
    try {
      this.dialogRef.open(MyPopUpCustomComponent);
    }catch(error){
      window.alert(error);
    }
  }
  // function permettant de faire un resize de l'objet (logo)
  // dès que l'event windows.resize est exécuté
  onResize() {
    try {
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
    }catch(error){
      window.alert(error)
    }
  }

  ngOnInit(): void {
    this.onResize();
  }

}
