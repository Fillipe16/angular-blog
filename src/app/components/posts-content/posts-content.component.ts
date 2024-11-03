import { Type } from '@angular/compiler';
import { Component } from '@angular/core';


type PostType = {
  author:String,
  title:String,
  description: String,
  tags:String[],
  img: String
}


@Component({
  selector: 'app-posts-content',
  templateUrl: './posts-content.component.html',
  styleUrl: './posts-content.component.css'
})
export class PostsContentComponent {
  postsRow1: PostType[] = [];
  postsRow2: PostType[] = [];

  ngOnInit(){
    this.postsRow1 = [
      {
        "author": "Olivia Rhye * 20 Jan 2024",
        "title": "Global Economy Faces Recession Threat",
        "description": "Experts warn that the global economy may be on the brink of a recession due to rising inflation and geopolitical tensions.",
        "tags": ["economy", "recession", "finance"],
        "img": "assets/default.jpg"
      },
      {
        "author": "James Liu * 15 Jan 2024",
        "title": "Advancements in Artificial Intelligence",
        "description": "Innovations in AI are transforming industries by automating processes and enhancing decision-making capabilities.",
        "tags": ["technology", "AI"],
        "img": "assets/default.jpg"
      },
      {
        "author": "Emma Tran * 10 Jan 2024",
        "title": "Health Benefits of Regular Exercise",
        "description": "Regular exercise is shown to reduce the risk of chronic illnesses and improve mental well-being.",
        "tags": ["health", "exercise"],
        "img": "assets/default.jpg"
      }
    ];
    this.postsRow2 = [
      {
        "author": "Michael Chen * 05 Jan 2024",
        "title": "Climate Change and Its Global Impact",
        "description": "Climate change is altering weather patterns, affecting wildlife, and displacing communities around the globe.",
        "tags": ["environment", "climate", "impact"],
        "img": "assets/default.jpg"
      },
      {
        "author": "Sophia Lopez * 02 Jan 2024",
        "title": "Top Travel Destinations for 2024",
        "description": "This year’s travel hotspots include breathtaking beaches, vibrant cities, and remote natural wonders.",
        "tags": ["travel", "destinations"],
        "img": "assets/default.jpg"
      },
      {
        "author": "Daniel Kim * 30 Dec 2023",
        "title": "The Rise of Remote Work Culture",
        "description": "As remote work becomes more common, companies are adapting to new workplace trends and productivity tools.",
        "tags": ["work"],
        "img": "assets/default.jpg"
      }
    ];
  }
}
