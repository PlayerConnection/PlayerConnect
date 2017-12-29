import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TournementresultPageComponent } from './pages/tournementresult-page/tournementresult-page.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'TournementResults', component: TournementresultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
