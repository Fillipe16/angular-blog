import { Component, OnInit } from '@angular/core';

type MenuItemType = {
  item : string,
  isExpand: boolean
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  itensMenu: MenuItemType[] = [];

  ngOnInit(){
      this.itensMenu = [
        {item: "Home",isExpand:false},
        {item: "Products", isExpand: true},
        {item: "Solutions", isExpand: true},
        {item: "Princing", isExpand: false},
        {item: "Resources", isExpand: true},
        {item: "Company", isExpand: false},
        {item: "Careers", isExpand: true}
      ]
  }
}
