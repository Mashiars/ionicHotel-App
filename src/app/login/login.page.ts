import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 username: string;
 password: string;
 currentUser:any
 UniqueId:any;
 users:any;
  constructor(private service:MyserviceService) { }

  ngOnInit() {
  }

  login(){
   if(this.users=="1"){

    console.log(this.username)
    console.log(this.password)
    this.service.loginUser(this.username,this.password);
    console.log(this.service.getUserUID());
  }else if(this.users=="2"){
    console.log(this.username)
    console.log(this.password)
    this.service.loginOwner(this.username,this.password);
    console.log(this.service.getUserUID());


  }

  }


   
    

}
