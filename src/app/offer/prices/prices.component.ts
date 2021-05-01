import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  pricedata:Array<any>
  amountData:Array<any>

  constructor(
    private offerService : OfferService,
) { 
  
  this.getName();
  this.getAmount();
}

ngOnInit(){
   
}

getName(){
  this.offerService.getJSON().subscribe(data => {
    this.pricedata = data;
});
}

getAmount(){
  this.offerService.getJSON().subscribe(data => {
    this.amountData = data;
});
}

}
