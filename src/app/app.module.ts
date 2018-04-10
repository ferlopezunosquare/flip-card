import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {SwitchCardComponent} from '../app/switch-card/switch-card.component';





const appRoutes: Routes = [
  { path: 'switch-card', component: SwitchCardComponent},
];


import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepperNewComponent } from './stepper-new/stepper-new.component';




@NgModule({
  declarations: [
    AppComponent,
    SwitchCardComponent,
    StepperComponent,
    StepperNewComponent,
 
  
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
