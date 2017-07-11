import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@nglibs/meta';

import { AppComponent } from './app.component';
import { MainBannerComponentComponent } from './main-banner-component/main-banner-component.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';
import { FeaturesComponent } from './features/features.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { HomeComponent } from './home/home.component';
import { Imwut2017augComponent } from './imwut2017aug/imwut2017aug.component';

export function metaFactory(): MetaLoader{
  return new MetaStaticLoader({
      pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
      pageTitleSeparator: ' | ',
      applicationName: 'OmniTrack',
      defaults: {
        title: 'OmniTrack: a Flexible Self-tracking Platform',
        description: 'Keep track of omnithing in your life',
        'og:image': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg',
        'og:type': 'website',
        'og:locale': 'en_US',
        'og:locale:alternate': 'en_US,ko_KR'
      }
    });
}

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path:'publications/imwut2017aug',
    component: Imwut2017augComponent,
    data: {mainBannerMode: "hidden"}
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponentComponent,
    MembersComponent,
    AboutComponent,
    PublicationsComponent,
    FeaturesComponent,
    AcknowledgementComponent,
    HomeComponent,
    Imwut2017augComponent
  ],
  imports: [
    BrowserModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    }),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
