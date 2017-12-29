import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournementresultPageComponent } from './tournementresult-page/tournementresult-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [TournementresultPageComponent, LandingPageComponent, ProfileComponent],
  exports: [
    TournementresultPageComponent,
    LandingPageComponent
  ]
})
export class PagesModule { }
