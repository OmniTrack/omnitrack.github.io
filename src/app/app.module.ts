import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainBannerComponentComponent } from './main-banner-component/main-banner-component.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponentComponent,
    MembersComponent,
    AboutComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
