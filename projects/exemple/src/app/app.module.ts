import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignSistemLibModule } from 'design-sistem-lib';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DesignSistemLibModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
