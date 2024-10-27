import { Component, Input } from '@angular/core';

type MenuItemType = {
  item : string,
  isExpand: boolean
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input("itensMenu")
  itens: MenuItemType[] = [];
}
