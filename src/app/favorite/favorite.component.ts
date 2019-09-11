import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'] ,
  encapsulation : ViewEncapsulation.Native // encapsulated StyleSheet
//   encapsulation : ViewEncapsulation.None
//   encapsulation : ViewEncapsulation.Emulated // by default 
})
export class FavoriteComponent{
  @Input('is-favorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();
  doFavorite() {
    this.isSelected = !this.isSelected
    this.click.emit(new FavoriteChangeEventArgs(this.isSelected));
  }
}

export class FavoriteChangeEventArgs{
	newValue : boolean
	constructor(val : boolean){
		this.newValue = val; 
	}
}
