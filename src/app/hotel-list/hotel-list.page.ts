import { Component, OnInit } from '@angular/core';
import  firebase from 'firebase';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.page.html',
  styleUrls: ['./hotel-list.page.scss'],
})
export class HotelListPage implements OnInit {

  displayprofile:any=[]

  constructor() {

   }

  ngOnInit() {
    firebase.firestore().collection('hotels').onSnapshot(res =>{
     res.forEach(element =>{
       this.displayprofile.push(element.data());
       console.log(this.displayprofile)
     });

     console.log('Display!!!!');

    });


    
  }

}
