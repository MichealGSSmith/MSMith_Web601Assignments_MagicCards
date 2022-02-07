import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  BlackLotus: Content = {
    id: 1,
    title: 'Black Lotus',
    description: 'Part of the Power Nine and Most expensive Card',
    creator: 'Chris Rahn',
    imgUrl: 'https://c1.scryfall.com/file/scryfall-cards/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838',
    type: 'Black',

  };

  MoxEmerald: Content = {
    id: 2,
    title: 'Mox Emerald',
    description: 'Part of the Power Nine',
    creator: 'Volkan Baga',
    imgUrl: 'https://c1.scryfall.com/file/scryfall-cards/large/front/a/c/aced2c55-7543-4076-bcdd-36c4d649b8ae.jpg?1614638841',
    type: 'Neutral',
    
  };

  MoxRuby: Content = {
    id: 3,
    title: 'Mox ruby',
    description: 'Part of the Power Nine',
    creator: 'Volkan Baga',
    imgUrl: 'https://c1.scryfall.com/file/scryfall-cards/large/front/4/5/45fd6e91-df76-497f-b642-33dc3d5f6a5a.jpg?1614638852',
    type: 'Neutral',
    
  };
  ContentList = new ContentList();
  constructor() {
    
    this.ContentList.addContent(this.BlackLotus);
    this.ContentList.addContent(this.MoxEmerald);
    this.ContentList.addContent(this.MoxRuby);
    console.log(this.ContentList.indexArray(1));
   }

  ngOnInit(): void {
  }

}
