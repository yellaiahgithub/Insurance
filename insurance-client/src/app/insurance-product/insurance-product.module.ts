import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceProductComponent } from './insurance-product.component';



@NgModule({
  declarations: [InsuranceProductComponent],
  imports: [
    CommonModule
  ],
  exports: [InsuranceProductComponent]
})
export class InsuranceProductModule { }
