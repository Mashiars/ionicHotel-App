import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  email: string;
  password: string;


  constructor() { }
  
  ngOnInit() {
  }



signup(){
console.log(this.email)
  console.log(this.password)
}

async createUser(email,password){
  firebase.auth().createUserWithEmailAndPassword(email,password).then(
    results=>{
      console.log(results);
    })
    }
  

}





