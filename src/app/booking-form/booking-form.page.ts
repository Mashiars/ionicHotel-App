import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
})
export class BookingFormPage implements OnInit {


  check_in:any;
  check_out:any;
  roomtype:any;
  adults:any;
  kids:any
  uid =this.route.snapshot.params.uid;
  collection:any;
  feedback:any;
  constructor(private service:MyserviceService,private route:ActivatedRoute) {  this.collection = 'hotel'; }

  ngOnInit() {
  }

  addbookings(){

    this.service. addbookings(this.service.getUserUID(),this.check_in,this.check_out,this.roomtype,this.adults,this.kids,this.uid)
    this.feedback = "Successfully Booked!!!";

  }
    
}
