import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  subscription: Subscription;
  idData: [];
  OfferData: any[] = [];
  OfData: [];
  chardata:Array<any>

  constructor(
    private offerService : OfferService,
) { 
  this.getCha();
}

ngOnInit(){
   
}

getCha(){
this.offerService.getJSON().subscribe(data => {
    this.chardata = data;
});
}


}
