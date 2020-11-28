import { WebMarketingComponent } from './../pages/portfolio/web-marketing/web-marketing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './../pages/portfolio/music/music.component';
import { BabyComponent } from './../pages/portfolio/baby/baby.component';
import { InFamilyComponent } from './../pages/portfolio/in-family/in-family.component';
import { PregnancyComponent } from './../pages/portfolio/pregnancy/pregnancy.component';
import { PortraitComponent } from './../pages/portfolio/portrait/portrait.component';
import { PortfolioComponent } from './../pages/portfolio/portfolio.component';
import { PrivateGalleriesComponent } from './../pages/private-galleries/private-galleries.component';
import { PricesComponent } from './../pages/prices/prices.component';
import { ContactComponent } from './../pages/contact/contact.component';
import { HomeComponent } from './../pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
      { path: 'portrait', component: PortraitComponent },
      { path: 'pregnancy', component : PregnancyComponent },
      { path: 'baby', component: BabyComponent },
      { path: 'in-family', component: InFamilyComponent },
      { path: 'web-Marketing', component : WebMarketingComponent },
      { path: 'music', component : MusicComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'private-galleries', component: PrivateGalleriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { anchorScrolling : 'enabled' })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
