import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from  '@angular/router';   
import  firebase from 'firebase';


@Component({
  selector: 'app-main-hotel',
  templateUrl: './main-hotel.page.html',
  styleUrls: ['./main-hotel.page.scss'],
})
export class MainHotelPage implements OnInit {

  mainhotel:any=[]
  uid =this.route.snapshot.params.uid;
  
  constructor( private route:ActivatedRoute ) {
   console.log(this.uid)
   }

  ngOnInit()  {
    firebase.firestore().collection('hotels').where("owneruid",'==',this.uid).onSnapshot(res =>{
     res.forEach(element =>{
       this.mainhotel.push(element.data());
       console.log(this.mainhotel)
     });

     console.log('Display!!!!');

    });


    
  }
  

}
