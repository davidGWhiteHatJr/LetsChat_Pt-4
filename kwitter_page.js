const firebaseConfig = {
    apiKey: "AIzaSyD8YhtaQYPvlA-4jUXScrQwDmjxT5XQ1Go",
    authDomain: "kwitter-dcf30.firebaseapp.com",
    databaseURL: "https://kwitter-dcf30-default-rtdb.firebaseio.com",
    projectId: "kwitter-dcf30",
    storageBucket: "kwitter-dcf30.appspot.com",
    messagingSenderId: "129695258070",
    appId: "1:129695258070:web:de68241aa714e36629c077",
    measurementId: "G-FMW26LLG1H"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}