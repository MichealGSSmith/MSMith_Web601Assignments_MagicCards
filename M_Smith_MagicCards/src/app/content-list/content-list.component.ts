import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  message: string = "";
  flag: boolean = false;
  content: Content[];

  constructor() {
    this.content = [
      {
        id: 0,
        title: "Black Lotus",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl:"https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/122584.jpg",
        type: "Black",
        tags: ["power nine", "power 9"]

      },
      {
        id: 1,
        title: "Mox Ruby",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-ruby-86403.jpg",
        type: "Red"

      },
      {
        id: 2,
        title: "Mox Jet",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-jet-61953.jpg"


      },
      {
        id: 3,
        title: "Time Walk",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/time-walk-69028.jpg"


      },
      {
        id: 4,
        title: "Mox Pearl",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-pearl-87881.jpg",
        type: "White"

      },
      {
        id: 5,
        title: "Ancestral Recall",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "",
        type: "Green",


      },
      {
        id: 6,
        title: "Mox Emerald",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "https://static.cardkingdom.com/images/magic-the-gathering/unlimited/mox-emerald-57668.jpg",
        type: "Green",
        tags: ["power nine", "power 9", "Green"]

      },
      {
        id: 7,
        title: "Timetwister",
        description: "Power 9 Original Card",
        creator: "Christopher Rush",
        imgUrl: "",
        type: "Blue",
        tags: ["power nine", "power 9","Blue"]

      },
    ]
  }
   

  ngOnInit(): void {
    
  }
  checkTitle(search: string): void{
    let searchList = this.content.filter(content => content.title == search);
    if (searchList.length > 0) {
      this.message = "Found Your Card!!";
      this.flag = true;
    } else {
      this.message = "Dude thats not even on the list!";
      this.flag = false;
    }
  }
  donothing(){

  }
}
