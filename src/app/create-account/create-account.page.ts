import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  data:  any;
  email: string;
  password: string;


  constructor(private router:Router) {
    this.data={
      email: '',
      password:''
      
    }
   }
  
  ngOnInit() {
  }



signup(){
console.log(this.data.email)
  console.log(this.data.password)
  this.createUser(this.data.email,this.data.password)
}

async createUser(email,password){
  firebase.auth().createUserWithEmailAndPassword(this.data.email,this.data.password).then(
    results=>{
      console.log(results);
      this.router.navigateByUrl('login');
    })
    }
  

}





