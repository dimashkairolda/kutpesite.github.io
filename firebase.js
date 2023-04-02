const firebaseConfig = {
    apiKey: "AIzaSyCOtjxBQyaleG6nD8D2xqEbWNTvoKCekJk",
    authDomain: "kutpe-kz.firebaseapp.com",
    databaseURL: "https://kutpe-kz-default-rtdb.firebaseio.com",
    projectId: "kutpe-kz",
    storageBucket: "kutpe-kz.appspot.com",
    messagingSenderId: "760528812857",
    appId: "1:760528812857:web:2fa9b7ccdea76b6c9946e8",
    measurementId: "G-1SR0FR7BFS"
  };
  
  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();

  function save(){
    var name = document.getElementById('name').value; 
  }