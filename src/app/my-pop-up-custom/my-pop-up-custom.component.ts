import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-pop-up-custom',
  templateUrl: './my-pop-up-custom.component.html',
  styleUrls: ['./my-pop-up-custom.component.scss']
})
export class MyPopUpCustomComponent {

  constructor(private dialogRef: MatDialog) {

  }
  deleteDiv(){
    try{
      document.getElementById('popup-msg')!.remove();
    }catch(error){
      window.alert("On remonte l'erreur");
      location.reload();
    }
  }
  generateSomething(){
    try{
      const msg = document.getElementById('popup-msg')!;
      // je vérfie que msg existe bien pour gérer l'erreur/l'infos
      msg.classList.remove('hidden')
            msg.classList.contains('is-ok')
            ? (
                msg.classList.replace('is-ok','error'),
                msg.textContent = "OOPS c'est malheureux de générer une erreur",
                'remonter une erreur au développeur ici'
              )
            : (
                msg.classList.replace('error', 'is-ok'),
                msg.textContent = "Ohhhlala c'est tout vert, c'est une good news !!"
              )
    }catch(error){
      // si msg n'existe pas l'idée est de renvoyer l'erreur directement aux dev
      // j'informe egalement le client que la page va recharger,
      // comme ça s'il veut save des data qui serait dans des inputs il pourrait le faire
      window.confirm("La page va se recharger" + error)
      ? location.reload() : 'on attend le client voir ce qu il décide '
    }
  }
  closeDialog(){
    try{
      this.dialogRef.closeAll();
    }catch(error){
      window.alert(error);
    }
  }
}
