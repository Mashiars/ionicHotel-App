import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-hotel-pictures',
  templateUrl: './hotel-pictures.page.html',
  styleUrls: ['./hotel-pictures.page.scss'],
})
export class HotelPicturesPage implements OnInit {
  imgUrl:any;
  feedback:any;
  constructor(private service:MyserviceService) {
  
   }

  ngOnInit() {
  }

  addImages(){
    this.service.addImages(this.service.getUserUID() ,this.service.getUserUID(), this.imgUrl)
    this.feedback = "Image Uploaded Successfully!";
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
