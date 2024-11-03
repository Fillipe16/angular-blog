import { Component, Input } from '@angular/core';
type PostType = {
  author:String,
  title:String,
  description: String,
  tags:String[],
  img: String
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() post: PostType | undefined;
}
