import { Component, OnInit } from '@angular/core';
import  firebase from 'firebase';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.page.html',
  styleUrls: ['./user-ui.page.scss'],
})
export class UserUiPage implements OnInit {


  displayprofile:any=[]

  constructor(private  service:MyserviceService) {}

  logOut(){
    this.service.logOut();
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
