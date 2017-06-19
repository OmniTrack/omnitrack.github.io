import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainBannerComponentComponent } from './main-banner-component/main-banner-component.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';
import { FeaturesComponent } from './features/features.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponentComponent,
    MembersComponent,
    AboutComponent,
    PublicationsComponent,
    FeaturesComponent,
    AcknowledgementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
