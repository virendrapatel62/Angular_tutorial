import { Component, Input } from '@angular/core';

@Component({
	selector: 'like',
	templateUrl: './like.component.html',
	styleUrls: ['./like.component.css'],
})
export class LikeComponent {
	@Input('likesCount') likesCount : number;
	@Input('isLiked') isLiked : boolean;


	likeTweet(){
		this.isLiked ? this.likesCount-- : this.likesCount++
		this.isLiked = !this.isLiked
	}

}
