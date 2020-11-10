import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-hotel-ui',
  templateUrl: './hotel-ui.page.html',
  styleUrls: ['./hotel-ui.page.scss'],
})
export class HotelUiPage implements OnInit {

  constructor(private  service:MyserviceService) { 

  this.service.getUserUID();
  console.log(this.service.getUserUID())
  }

  ngOnInit() {
  }
  logOut(){
   this.service.signOut();
  }
}
