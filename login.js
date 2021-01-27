//Your web app's firebase configuration
var firebaseConfig = {
     apikey: "AIzaSyBh2OUq8_OnYjGQykScN9A_u1BRR6DAU4" ,
     authDomain: "form-42b93.firebaseapp.com",
     databaseURL: "https://form-42b93.firebaseio.com",
     projectId: "form-42b93",
     storageBucket: "form-42b93.appspot.com",
     messagingSenderId: "532697997855",
     appId: "1:532697997855:web:fbd84de453da5135eb2a"
};
//Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

  function signUp(){
  
     var email = document.getElementById("email");
     var password = document.getElementById("password");
     
     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
     
     alert("Signed Up");
    }
    
    
    
    function signIn(){
     
     var email = document.getElementById("email");
     var password = document.getElementById("password");
     
     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
     
     
     
     
    }
    
    
    function signOut(){
     
     auth.signOut();
     alert("Signed Out");
     
    }
    
    
    
    auth.onAuthStateChanged(function(user){
     
     if(user){
      
      var email = user.email;
      alert("Active User " + email);
      
      //Take user to a different or home page
   
      //is signed in
      
     }else{
      
      alert("No Active User");
      //no user is signed in
     }
     
     
     
    });