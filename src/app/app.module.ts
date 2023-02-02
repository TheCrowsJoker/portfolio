import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavigationComponent } from './navigation/navigation.component';
import { CircusContactComponent } from './circus/circus-contact/circus-contact.component';
import { CircusFooterComponent } from './circus/circus-footer/circus-footer.component';
import { CircusAboutComponent } from './circus/circus-about/circus-about.component';
import { CircusGalleryComponent } from './circus/circus-gallery/circus-gallery.component';
import { CircusBannerComponent } from './circus/circus-banner/circus-banner.component';
import { CircusUpcomingShowsComponent } from './circus/circus-upcoming-shows/circus-upcoming-shows.component';
import { HttpClientModule } from '@angular/common/http';
import { CircusComponent } from './circus/circus.component';
import { DevComponent } from './dev/dev.component';
import { DevBannerComponent } from './dev/dev-banner/dev-banner.component';
import { DevKeyboardComponent } from './dev/dev-about/dev-keyboard/dev-keyboard.component';
import { DevTechComponent } from './dev/dev-tech/dev-tech.component';
import { DevAboutComponent } from './dev/dev-about/dev-about.component';
import { DevWorkComponent } from './dev/dev-work/dev-work.component';
import { DevContactComponent } from './dev/dev-contact/dev-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'dev', pathMatch: 'full' },
  { path: 'dev', component: DevComponent },
  { path: 'circus', component: CircusComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CircusContactComponent,
    CircusFooterComponent,
    CircusAboutComponent,
    CircusGalleryComponent,
    CircusBannerComponent,
    CircusUpcomingShowsComponent,
    CircusComponent,
    DevComponent,
    DevBannerComponent,
    DevKeyboardComponent,
    DevTechComponent,
    DevAboutComponent,
    DevWorkComponent,
    DevContactComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
