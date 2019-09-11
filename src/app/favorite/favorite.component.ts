import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
  @Input('is-favorite') isSelected : boolean ;
  constructor() { }

  ngOnInit(){

  }

  doFavorite(){
    this.isSelected = !this.isSelected 
  }

}
