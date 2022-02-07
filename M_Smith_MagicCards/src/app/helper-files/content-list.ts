import { Content } from "./content-interface";

export class ContentList {
        private _arrays: Content[]; 

        constructor() {
            this._arrays = [];
        }
        
        get arrays(): Content[]{
            return this._arrays;
        }

        addContent(item: Content) {
            this._arrays.push(item);
        }

        countArray() : number  {
            return this._arrays.length;
        }

        indexArray(index: number) {
            if(this.countArray() <= index) {
                return "<p> you messed up</p>";
            }

            return 
            `<div class="card">
            <h4> ${this._arrays[index].title}</h4>
            <img src=" ${this._arrays[index].imgUrl}" alt="MagicCard" style="width:200px; height: 150px">
            <p> ${this._arrays[index].description}</p>
            <p> ${this._arrays[index].creator}</p>
            <p> ${this._arrays[index].type}</p>


            `;
            
            
        }
    }
