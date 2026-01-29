import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UserCardComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
