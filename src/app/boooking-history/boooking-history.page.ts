import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  firebase from 'firebase';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-boooking-history',
  templateUrl: './boooking-history.page.html',
  styleUrls: ['./boooking-history.page.scss'],
})
export class BoookingHistoryPage implements OnInit {

  list:any=[]
  constructor(private route:ActivatedRoute,public myService:MyserviceService) { 
   // this.hotelService.signOut()
 
  console.log(  this.myService.getUserUID())
  firebase.firestore().collectionGroup("bookings")
  .where("useruid", "==",   this.myService.getUserUID()).orderBy("check_in","asc")
  .get()
  .then(snap => {
      snap.forEach(doc => {
        this.list.push(doc.data())  ;
      });
  });
    
 }
  ngOnInit() {

  }

}
