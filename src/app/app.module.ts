import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { LayoutComponent } from './navigation/layout/layout.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { PrivateGalleriesComponent } from './pages/private-galleries/private-galleries.component';
import { PregnancyComponent } from './pages/portfolio/pregnancy/pregnancy.component';
import { BabyComponent } from './pages/portfolio/baby/baby.component';
import { PortraitComponent } from './pages/portfolio/portrait/portrait.component';
import { InFamilyComponent } from './pages/portfolio/in-family/in-family.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WebMarketingComponent } from './pages/portfolio/web-marketing/web-marketing.component';
import { MusicComponent } from './pages/portfolio/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricesComponent,
    ContactComponent,
    HeaderComponent,
    LayoutComponent,
    SidenavComponent,
    PrivateGalleriesComponent,
    PregnancyComponent,
    BabyComponent,
    PortraitComponent,
    InFamilyComponent,
    PortfolioComponent,
    WebMarketingComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
