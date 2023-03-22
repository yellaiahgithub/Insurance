import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { HomeComponent } from './home/home.component';
import { InsuranceProductComponent } from './insurance-product/insurance-product.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { QuoteComponent } from './quote/quote.component';
import { ResourceComponent } from './resource/resource.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'insurance', component: InsuranceProductComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'support', component: CustomerSupportComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
