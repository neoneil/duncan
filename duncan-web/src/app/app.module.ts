import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeroSectionComponent,
    ChooseUsComponent,
    OurWorkComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
