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


 

  onNew() {
    this.quotesModel = new Quotes("", "", "",new Date(), 0, 0);
    this.submitType = 'Save';
    this.showNew = true;
  }
   


  onSave() {
    if (this.submitType === 'Save') {
      this.quotes.push(this.quotesModel);
    }
    this.showNew = false;
  }


  onCancel() {

    this.showNew = false;
  }

quotes =  [
new Quotes ( 'Isaac Newton', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Oscar',new Date(2019,2,12),0,0),
new Quotes ( 'Bob Colymore', 'The road to success is hard only the strong hearted make it','oscar',new Date(),0,0),
new Quotes ( 'Isaac Newton', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Oscar',new Date(2019,2,12),0,0),
new Quotes ( 'Isaac Newton', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Oscar',new Date(2019,2,12),0,0),
new Quotes ( 'Isaac Newton', 'Gravity is a force that pulls things toward the Earth, an it affects all the features on Earth', 'Oscar',new Date(2019,2,12),0,0),

];
delete(i) {
    this.quotes.splice(i, 1);
      }

  constructor() { }

  ngOnInit() {
  }

}
