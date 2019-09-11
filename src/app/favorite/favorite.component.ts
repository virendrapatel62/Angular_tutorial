import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
  @Input('is-favorite') isFavorite : boolean ;
  constructor() { }

  ngOnInit(){

  }

  doFavorite(){
    this.isFavorite = !this.isFavorite 
  }

}
