import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    NewsfeedComponent
  ],
  exports: [
    NavbarComponent,
    NewsfeedComponent
  ]
})
export class ComponentsModule { }
