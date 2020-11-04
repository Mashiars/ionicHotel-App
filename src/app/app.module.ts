import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCEf8xXKYHVHe3MgBN8XgD71qOCRgZwCmA",
  authDomain: "hotels-app-f4fd7.firebaseapp.com",
  databaseURL: "https://hotels-app-f4fd7.firebaseio.com",
  projectId: "hotels-app-f4fd7",
  storageBucket: "hotels-app-f4fd7.appspot.com",
  messagingSenderId: "994199615911",
  appId: "1:994199615911:web:138bb267b8b1a975775e82",
  measurementId: "G-6395SGQVJQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
