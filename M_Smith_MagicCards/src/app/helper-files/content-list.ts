import { Content } from "./content-interface";

export class ContentList {
        private _arrays: Content[]; 

        constructor(array: Content) {
            this._arrays = [];
        }
        
        get arrays(): Content[]{
            return this._arrays;
        }

        addContent(item: Content) {
            this._arrays.push(item);
        }

        countArray(array: Content) {
            return this._arrays.length;
        }

        indexArray(array: Content) {
            
        }
    }
