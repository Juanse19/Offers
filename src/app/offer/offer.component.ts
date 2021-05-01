import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  subscription: Subscription;
  idData: [];
  OfferData: any[] = [];
  nameData: any ;
  

  constructor(
    private offerService : OfferService,
) { 
  // this.subscription = this.offerService.getJSON().subscribe(data => {
    
  //   this.OfferData.push(data.versions.id);
  // });
  this.getData();

}

ngOnInit(){
   
}

getData(){
  this.offerService.getJSON().subscribe(data => {
    this.idData = data;
});
}

getName(){
  this.offerService.getJSON().subscribe(data => {
    this.OfferData = data;
    console.log("prueba",data);
});
}

}
