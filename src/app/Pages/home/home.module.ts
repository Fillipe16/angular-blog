import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PostsContentComponent } from '../../components/posts-content/posts-content.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecentContentComponent } from '../../components/recent-content/recent-content.component';
import { HomeComponent } from './home.component';
import { MenuItemComponent } from '../../components/header/menu-item/menu-item.component';
import { RecentBigCardComponent } from '../../components/recent-content/recent-big-card/recent-big-card.component';
import { RecentCardComponent } from '../../components/recent-content/recent-card/recent-card.component';
import { CardComponent } from '../../components/posts-content/card/card.component';
import { PaginacaoComponent } from '../../components/posts-content/paginacao/paginacao.component';
import { BottomMenuComponent } from '../../components/footer/bottom-menu/bottom-menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecentContentComponent,
    PostsContentComponent,
    MenuItemComponent,
    RecentBigCardComponent,
    RecentCardComponent,
    CardComponent,
    PaginacaoComponent,
    BottomMenuComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
