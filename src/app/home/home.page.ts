//importation des composants pour l'affichange
//et la gestion de l'écran
import { Component } from '@angular/core';

// Decorateur
//permet d'indiquer le  rôle fr l'élément qui suit
//sa permet egalement de le parametre
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = 'murielle';
  public preferedColor = 'warning';
  public isListHidden = true;

  public countryList = [
    { name: 'France', mainCity: 'Paris', flag: 'french-flag.jpg', population:
  67 },
    { name: 'Sénégal', mainCity: 'Dakar', flag: 'senegal-flag.jpg', population:
  12 }
  ];
  constructor() { }
  public showHideList() {
    /*
    if(this.isListHidden){
      this.isListHidden = false;
    }else{
      this.isListHidden = true;
    } */
    this.isListHidden = !this.isListHidden;
  }
}
