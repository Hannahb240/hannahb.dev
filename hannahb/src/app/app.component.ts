import { Component, ViewChild, OnInit } from '@angular/core';

import * as firebase from "firebase/app";
import * as admin from 'firebase-admin';
import "firebase/auth";
import "firebase/firestore";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: "AIzaSyAI8BPNlssE-FllwiHpR4vwM9rb6-KPmLU",
    authDomain: "hannahb-25372.firebaseapp.com",
    databaseURL: "https://hannahb-25372.firebaseio.com",
    projectId: "hannahb-25372",
    storageBucket: "hannahb-25372.appspot.com",
    messagingSenderId: "468387336776",
    appId: "1:468387336776:web:b67e9cd49cdda57b94be7d"
  };

    // Initialize Firebase
    project = firebase.initializeApp(this.firebaseConfig);
    

    ngOnInit() {
      

      console.log('ahah', this.project);

      

  }

  authPls() {

    admin.auth().setCustomUserClaims('2p4yd4EaGiPihmhT5cn1dz200I13', {admin: true}).then(() => {
        console.log('done');
      });

  }

}


