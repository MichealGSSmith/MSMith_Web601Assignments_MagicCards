import { Component, OnInit } from '@angular/core';
import { triggerAsyncId } from 'async_hooks';
import { type } from 'os';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content?:Content[];
  constructor() {
    this.content = [
      {
        id: 0,
        title: "Black Lotus",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/24/LEA_Black_Lotus.jpg/revision/latest/scale-to-width-down/672?cb=20190308055024",
        type: "Black",
        tags: ["power nine", "power 9"]

      },
      {
        id: 1,
        title: "Black Lotus",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/24/LEA_Black_Lotus.jpg/revision/latest/scale-to-width-down/672?cb=20190308055024",
        type: "Red"

      },
      {
        id: 2,
        title: "Black Lotus",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/24/LEA_Black_Lotus.jpg/revision/latest/scale-to-width-down/672?cb=20190308055024"


      },
      {
        id: 3,
        title: "Black Lotus",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/24/LEA_Black_Lotus.jpg/revision/latest/scale-to-width-down/672?cb=20190308055024"


      },
      {
        id: 4,
        title: "Black Lotus",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/24/LEA_Black_Lotus.jpg/revision/latest/scale-to-width-down/672?cb=20190308055024"


      },
      {
        id: 5,
        title: "Black Lotus",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/24/LEA_Black_Lotus.jpg/revision/latest/scale-to-width-down/672?cb=20190308055024"


      }
    ]
  }
   

  ngOnInit(): void {
    
  }
}
