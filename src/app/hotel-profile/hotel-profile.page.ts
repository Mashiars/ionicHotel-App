import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-hotel-profile',
  templateUrl: './hotel-profile.page.html',
  styleUrls: ['./hotel-profile.page.scss'],
})
export class HotelProfilePage implements OnInit {
  profileHotel:any=[]
  constructor(private service:MyserviceService) { }

  ngOnInit() {
    firebase.firestore().collection('hotels').doc(this.service.getUserUID() ).collection('hotel').onSnapshot(res => {
      res.forEach(element => {
        this.profileHotel.push(element.data())
      });
      console.log('Successful!!!');
    }); 
  }


  logOut(){
    this.service.signOut();
   }

  }



