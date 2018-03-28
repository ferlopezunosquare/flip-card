import { Component, trigger, state, style, transition, animate, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { InputLoan } from '../input-loan';

@Component({
  selector: 'app-switch-card',
  templateUrl: './switch-card.component.html',
  styleUrls: ['./switch-card.component.scss'],
  animations: [
    trigger('flip', [
      state('Front', style({ transform: 'rotateY(180deg)' })),
      state('Back', style({ transform: 'rotateY(0)' })),
      transition('* => *', animate('300ms ease-in-out'))
    ])  
  ]
})

export class SwitchCardComponent implements OnInit {
  flip = 'Back';

  @Input() loanInfo : InputLoan

  @Output() valueChange = new EventEmitter();
  
  valueChanged(){
    
    this.valueChange.emit();
  }

  toggleFront() {
    this.flip = (this.flip === 'Back') ? 'Front' : 'Back';
  }
  toggleBack(){
    this.flip = (this.flip === 'Front') ? 'Back' : 'Front';
  }
  constructor() {}
  ngOnInit() {}
}
