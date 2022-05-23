import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModalComponent } from './first-modal/first-modal.component';
import { SecondModalComponent } from './second-modal/second-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstModalComponent,
    SecondModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
