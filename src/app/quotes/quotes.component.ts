import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


 showNew: Boolean = false;
  quotesModel: Quotes;
  submitType: string = 'Save';
  newQuote() {
    this.quotesModel = new Quotes("", "", "",new Date(), 0, 0);
    this.showNew = true;
    this.submitType = 'Save';
  }
  
  saveQuote() {
    if (this.submitType === 'Save') {
      this.quotes.push(this.quotesModel);
    }
    this.showNew = false;
  }

  deleteQuote(i) {
    this.quotes.splice(i, 1);
      }

quotes =  [
new Quotes ( 'Isaac Newton', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Oscar',new Date(2019,2,12),0,0),
new Quotes ( 'Bob Colymore', 'The road to success is hard only the strong hearted make it','oscar',new Date(),0,0),
new Quotes ( 'Carlse Champ', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Job',new Date(2019,3,4),0,0),
new Quotes ( 'Garry Kaparov', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Mark',new Date(2019,10,7),0,0),
new Quotes ( 'Bill Gates', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Oscar',new Date(2019,7,5),0,0),

];


  constructor() { }

  ngOnInit() {
  }

}
