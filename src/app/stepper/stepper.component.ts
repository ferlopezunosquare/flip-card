import { Component, OnInit,trigger,state,style,animate, transition, Input } from '@angular/core';
import {StatusCircle , StatusBar} from '../status-value.enum';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger( 'status', [
      state('current', style({
        backgroundColor:'#1e8257',
        border: '6px solid white',
        boxShadow: '0 0 6px #1e8257'
      })),
      state('checked', style({
        backgroundColor:'#1e8257',
      })),
      state('unchecked', style({
        backgroundColor:'#999999'
      })),
      state('notCurrent', style({
        backgroundColor:'#999999',
        
      })),
      state('notCurrentBar', style({
        borderTop:'3px solid #999999'
        
      })),
      state('checkedBar', style({
        borderTop:'3px solid #1e8257'
      })),
      transition('current <=> checked',[
        animate('1s')
    ]),
  ])
]
})



 
export class StepperComponent implements OnInit {
  @Input () steps : Array<{text : string}>;

  currentStatus = StatusCircle[1];
  visitedStatus = StatusCircle[2];
  notVisitedStatus = StatusCircle[0];

  currentStatusBar = StatusBar[1];
  visitedBarStatus = StatusBar[2];
  notVisitedBarStatus = StatusBar[0];
  
  public currentStep : number = 0;
  

  completeStep(){
    this.currentStep += 1;
    console.log(this.currentStep);
   
  }
  constructor() { }

  ngOnInit() { }

}
