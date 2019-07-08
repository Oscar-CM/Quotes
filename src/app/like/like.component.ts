import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
 
 upvotes = 0;
 downvotes = 0

 voteUp(){
 this.upvotes = this.upvotes+1;
 }
  voteDown(){
 this.downvotes = this.downvotes+1;
 }
  constructor() { }

  ngOnInit() {
  }

}
