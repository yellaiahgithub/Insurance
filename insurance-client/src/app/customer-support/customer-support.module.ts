import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerSupportComponent } from './customer-support.component';
import { PaymentComponent } from '../payment/payment.component';


@NgModule({
  declarations: [CustomerSupportComponent],
  imports: [
    CommonModule,
    PaymentComponent,
  ],
  exports: [CustomerSupportComponent],
})
export class CustomerSupportModule { }
