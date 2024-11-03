import { Component, Input } from '@angular/core';
type PostType = {
  author:String,
  title:String,
  description: String,
  tags:String[],
  img: String
}

@Component({
  selector: 'app-recent-card',
  templateUrl: './recent-card.component.html',
  styleUrl: './recent-card.component.css'
})
export class RecentCardComponent {
  @Input() post : PostType | undefined;
}
