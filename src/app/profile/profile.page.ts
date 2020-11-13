import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  mainhotel:any=[]
  uid =this.route.snapshot.params.uid;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    firebase.firestore().collection('hotels').where("owneruid",'==',this.uid).onSnapshot(res =>{
      res.forEach(element =>{
        this.mainhotel.push(element.data());
        console.log(this.mainhotel)
      });
 
      console.log('Display!!!!');
 
     });
  }

}
