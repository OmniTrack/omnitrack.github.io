import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@nglibs/meta';

import {MemberProfileService} from "./member-profile.service";
import { SharedService } from "./shared.service";

import { AppComponent } from './app.component';
import { MainBannerComponentComponent } from './main-banner-component/main-banner-component.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';
import { FeaturesComponent } from './features/features.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { HomeComponent } from './home/home.component';
import { Imwut2017augComponent } from './imwut2017aug/imwut2017aug.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NewsComponent } from './news/news.component';
import { RecruitComponent } from './recruit/recruit.component';
import { GlobalComponent } from './global/global.component';

export function metaFactory(): MetaLoader{
  return new MetaStaticLoader({
      pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
      pageTitleSeparator: ' | ',
      applicationName: 'OmniTrack',
      defaults: {
        title: 'OmniTrack: a Flexible Self-tracking Platform',
        description: 'Track what\'s important for you.',
        'og:image': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg',
        'og:type': 'website',
        'og:locale': 'en_US',
        'og:locale:alternate': 'en_US,ko_KR'
      }
    });
}

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '',
        component: HomeComponent
        //redirectTo: '/ubicomp2017',
        //pathMatch: 'full'
      },
      {
        path:'ubicomp2017',
        component: Imwut2017augComponent,
        data: {mainBannerMode: "hidden"}
      }
    ]
  },
  {
    path: 'recruit',
    component: RecruitComponent,
    data: {hideTopBar: true}
  }
]

@NgModule({
  declarations: [
    GlobalComponent,
    AppComponent,
    MainBannerComponentComponent,
    MembersComponent,
    AboutComponent,
    PublicationsComponent,
    FeaturesComponent,
    AcknowledgementComponent,
    HomeComponent,
    Imwut2017augComponent,
    HeaderBarComponent,
    NewsComponent,
    RecruitComponent
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
        enableTracing: true,
        useHash: false
      }
    )
  ],
  providers: [SharedService, MemberProfileService],
  bootstrap: [GlobalComponent]
})
export class AppModule { }
