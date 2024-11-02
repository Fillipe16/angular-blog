import { Component, OnInit } from '@angular/core';

type BottomMenuType =  {
  title: string,
  data: string[]
}

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.css'
})
export class BottomMenuComponent implements OnInit {
  columns: BottomMenuType[] = [];

  ngOnInit(){
    this.columns = [
      {"title":"Product","data":["Overview", "Features","Solutions","Tutorials","Pricing","Releases"]},
      {"title":"Company","data":["About us", "Carrers","Press","News","Media kit","Contact"]},
      {"title":"Resources","data":["Blog", "Newsletter","Events","Help center","Tutorials","Support"]},
      {"title":"Social","data":["Twitter", "Linkedin","Facebook","GitHub","AngelList","Dribble"]},
      {"title":"Legal","data":["Terms", "Privacy","Cookies","Licenses","Settings","Contact"]}
    ]
  }

}
