import { Component } from '@angular/core';
type PostType = {
  author:String,
  title:String,
  description: String,
  tags:String[],
  img: String
}

@Component({
  selector: 'app-recent-content',
  templateUrl: './recent-content.component.html',
  styleUrl: './recent-content.component.css'
})
export class RecentContentComponent {
  bigCard: PostType | undefined;
  recentCards: PostType[] | undefined;

  ngOnInit(){
    this.bigCard  = {
      "author": "Ava Brooks * 25 Jan 2024",
      "title": "New Discoveries in Space Exploration",
      "description": "Scientists reveal groundbreaking findings from recent space missions, expanding our understanding of the universe.",
      "tags": ["space", "science", "exploration"],
      "img": "assets/bigCard.jpg"
    };
    this.recentCards = [
      {
        "author": "Liam Adams * 23 Jan 2024",
        "title": "Advances in Renewable Energy Technology",
        "description": "Innovative renewable energy sources are set to make a significant impact on reducing carbon emissions.",
        "tags": ["energy", "renewable", "technology"],
        "img": "assets/recent1.jpg"
      },
      {
        "author": "Mia Johnson * 22 Jan 2024",
        "title": "New Trends in Social Media Platforms",
        "description": "Social media trends are evolving as new platforms gain popularity among younger audiences.",
        "tags": ["social media", "trends"],
        "img": "assets/recent2.jpg"
      },
      {
        "author": "Ethan Roberts * 21 Jan 2024",
        "title": "Breakthrough in Cancer Research",
        "description": "A promising new approach in cancer treatment is offering hope for more effective therapies.",
        "tags": ["health", "cancer", "research"],
        "img": "assets/recent3.jpg"
      }
    ];
  }
  
}
