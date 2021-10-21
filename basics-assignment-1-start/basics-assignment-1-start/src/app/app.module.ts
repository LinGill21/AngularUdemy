import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { warningAlertComponent } from './warningAlert/warningAlert.component';
import { sucessAlertComponent } from './sucessAlert/sucessAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    warningAlertComponent,
    sucessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
