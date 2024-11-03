import { Component, Input } from '@angular/core';
type PostType = {
  author:String,
  title:String,
  description: String,
  tags:String[],
  img: String
}

@Component({
  selector: 'app-recent-big-card',
  templateUrl: './recent-big-card.component.html',
  styleUrl: './recent-big-card.component.css'
})
export class RecentBigCardComponent {
  @Input() post : PostType | undefined;
}
