import { Component} from '@angular/core';
import {InputLoan} from './input-loan'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardInfo : InputLoan;
  steps : Array <{ text : string}>;
  displayChange(event){}
  constructor() {
    this.cardInfo = new InputLoan(15000,15,12,1200,2,3,5);
    this.steps =     [
      {text : "Business Information"},
      {text : "Owner Information"},
      {text : "Additional Owner Information"},
      {text : "Select Offer"},
      {text : "Review & Submit"}
      ];
  }


}
