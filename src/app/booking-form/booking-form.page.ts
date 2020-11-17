import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
})
export class BookingFormPage implements OnInit {

   data: any;
  // check_in:any;
  // check_out:any;
  // roomtype:any;
  // adults:any;
  // kids:any
  uid =this.route.snapshot.params.uid;
  collection:any;
  feedback:any;
  constructor(private service:MyserviceService,private route:ActivatedRoute) {  this.collection = 'hotel';

  this.data={
    check_in: '',
    check_out: '',
    roomtype:  '',
    adults:  '',
    kids: ''


  }
  
  }

  ngOnInit() {
  }

  addbookings(){

    this.service. addbookings(this.service.getUserUID(),this.data.check_in,this.data.check_out,this.data.roomtype,this.data.adults,this.data.kids,this.uid)
    this.feedback = "Successfully Booked!!!";

  }
    
}
