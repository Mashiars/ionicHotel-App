import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-hotel-edit-profile',
  templateUrl: './hotel-edit-profile.page.html',
  styleUrls: ['./hotel-edit-profile.page.scss'],
})
export class HotelEditProfilePage implements OnInit {
 

  /*Make Hotel Profile (Form)*/
  data:any;
   imgUrl:any;
 /*End here */
  collection:any;
  feedback:any;
   constructor(private service:MyserviceService) { 
     this.collection = 'hotel';
     this.data ={
       rating:'',
       location:'',
       price:'',
       name:'',
       contacts:'',
       facilities:''

     }






   }

   ngOnInit() {
   }
   addProfileHotel(){
          
    this.service.addProfileHotel(this.service.getUserUID(),this.data.name,this.data.rating,this.data.location,this.data.contacts,this.data.price,this.service.getUserUID() ,this.collection,this.imgUrl,this.data.facilities);
    this.feedback = "Profile Added Successfully!";
   }


   fileChangeEvent(editFileInput: any){
    const reader = new FileReader();
        reader.onload = (e:any)=>{
           const image = new Image();
          image.src = e.target.result;
          image.onload = rs=> {
            const imgBase64Path = e.target.result;
           this.imgUrl = imgBase64Path;
            return this.imgUrl;
          }
           }
        reader.readAsDataURL(editFileInput.target.files[0])
   }

   logOut(){
   this.service.signOut();
  }


}
