import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { PostsContentComponent } from '../posts-content/posts-content.component';
import { FooterComponent } from '../footer/footer.component';
import { RecentContentComponent } from '../recent-content/recent-content.component';
import { HomeComponent } from './home.component';
import { MenuItemComponent } from '../header/menu-item/menu-item.component';
import { RecentBigCardComponent } from '../recent-content/recent-big-card/recent-big-card.component';
import { RecentCardComponent } from '../recent-content/recent-card/recent-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecentContentComponent,
    PostsContentComponent,
    MenuItemComponent,
    RecentBigCardComponent,
    RecentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
