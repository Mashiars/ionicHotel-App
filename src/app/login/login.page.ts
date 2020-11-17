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
  data: any;
//  username: string;
//  password: string;
 currentUser:any
 UniqueId:any;
 users:any;
  constructor(private service:MyserviceService) { 
    this.data={
      username:'',
      password:'',
      users:''
    }
  }

  ngOnInit() {
  }

  login(){
   if(this.data.users=="1"){

    console.log(this.data.username)
    console.log(this.data.password)
    this.service.loginUser(this.data.username,this.data.password);
    console.log(this.service.getUserUID());
  }else if(this.data.users=="2"){
    console.log(this.data.username)
    console.log(this.data.password)
    this.service.loginOwner(this.data.username,this.data.password);
    console.log(this.service.getUserUID());


  }

  }


   
    

}
