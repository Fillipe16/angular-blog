import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { PostsContentComponent } from '../posts-content/posts-content.component';
import { FooterComponent } from '../footer/footer.component';
import { RecentContentComponent } from '../recent-content/recent-content.component';
import { HomeComponent } from './home.component';
import { MenuItemComponent } from '../header/menu-item/menu-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecentContentComponent,
    PostsContentComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
