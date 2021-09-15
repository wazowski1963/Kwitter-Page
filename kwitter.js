// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsIeeJUI_FZXa_CHjMAEvdHN6PBcI19k",
  authDomain: "kwitter-6cf21.firebaseapp.com",
  databaseURL: "https://kwitter-6cf21-default-rtdb.firebaseio.com",
  projectId: "kwitter-6cf21",
  storageBucket: "kwitter-6cf21.appspot.com",
  messagingSenderId: "860511760067",
  appId: "1:860511760067:web:cf3646da9b3a795c693c76"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() 
{
  user_name = document.getElementById("user_name").value;
  console.log("hi");
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}