import { NgModule } from '@angular/core';
import { DButtonComponent } from './d-button/d-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DButtonComponent],
  imports: [MatButtonModule],
  exports: [DButtonComponent],
})
export class DesignSistemLibModule {}
