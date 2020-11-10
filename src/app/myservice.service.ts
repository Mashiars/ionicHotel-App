import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  currentUser:any
  UniqueId:any;
  arProfile:any=[]
  constructor(private router:Router) { }

  // login
  async loginUser(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      results=>{
    this.currentUser   = firebase.auth().currentUser;
  var user_uid = this.currentUser.uid
        this.userUID(user_uid)
       // console.log(user_uid);
        this.router.navigateByUrl('hotel-ui');
      })
      }

      userUID(uid){
        this.UniqueId = uid;
       }  
       getUserUID(){
        return this.UniqueId;
       }   
  

   addhotelprofiles(hoteluid,name,rating,location,types,price){

    var db=firebase.firestore();
    var hotelsRef =db.collection("hotels");
    var hotel = Promise.all([

      hotelsRef.doc(hoteluid).set({
       name:name,
       rating:rating,
       location:location,
       types:types,
       price:price,
       hoteluid:hoteluid


      }).then(a=>{console.log("saved")}).catch(function(error){
        console.log("error getting document:",error);
      })




    ]);

   }


   

}


















// import { Injectable } from '@angular/core';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class MyserviceService {
//   currentUser:any
//   UniqueId:any;
//   arProfile:any=[]
//   constructor(private router:Router) { }

//   // login
//   async loginUser(email,password){

//     firebase.auth().signInWithEmailAndPassword(email,password).then(
//       results=>{
//     this.currentUser   = firebase.auth().currentUser;
//   var user_uid = this.currentUser.uid
//         this.userUID(user_uid)
//        // console.log(user_uid);
//         this.router.navigateByUrl('hotel-ui');
//       })


//       }

      
//       userUID(uid){
//         this.UniqueId = uid;
//        }  



//        getUserUID(){
//         return this.UniqueId;
//        }   
//     //hotel owner

//        addProfileHotel(uid,name,rating,location,types,price,owneruid,collection,imgUrl){
//         var db =firebase.firestore();
//         var hotelsRef = db.collection("hotels");
//         var hotel = Promise.all([
//           hotelsRef.doc(uid).collection(collection).doc().set({
//               hotelname: name,
//               location:location,
//               rating: rating,
//               types: types,
//               price: price,
//               owneruid:owneruid,
//               imgUrl:imgUrl
//           })
//       ]);

//       }

//       //Images(gallary)
//       addImages(uid,owneruid,imgUrl){
//         var db =firebase.firestore();
//         var hotelsRef = db.collection("Hotels");
//         var hotel = Promise.all([
//           hotelsRef.doc(uid).collection('hotel').doc().collection('images').doc().set({
//             owneruid:owneruid,
//             imgUrl:imgUrl
//           })
//       ]);
//       }

//       async signOut(){
//         firebase.auth().signOut().then(results=>{
//           console.log(results);
//           this.router.navigateByUrl('home');
//         }).catch((error)=>{
//           console.log(error.message);
//         });
//       }

// }
