function login(){
    let email=document.getElementById("username").value
    let password=document.getElementById("Password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    
    location.href="file:///C:/Users/iqra%20com/Desktop/hackthon/main.html"
    console.log(user.email)
   
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("username or password is incorrect")
  });
}


function Registration(){
    let email=document.getElementById("Regname").value
    let password=document.getElementById("RegPassword").value
    console.log(email,password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    location.href="file:///C:/Users/iqra%20com/Desktop/hackthon/index.html"
    preventDefault();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  


}



function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        location.href="file:///C:/Users/iqra%20com/Desktop/hackthon/index.html"
    }).catch((error) => {
        // An error happened.
    });
}




let popped = 0;
let wrong=0

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "green"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                document.getElementById("lastLoggedIn").innerHTML=popped;
                removeEvent(e);
                checkAllPopped();
                
    } 
    
    if (e.target.className === "balloon"){
        
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "Wrong!";
        wrong++;
        document.getElementById("wrong").innerHTML=wrong;
        removeEvent(e);
        checkAllPopped();
        
}   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 6){
        console.log( popped);
        
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
    if (wrong === 3){
        console.log( wrong);
        
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
function startgame(){
    document.getElementById("start").style.display="none";
    document.getElementById("balloonBG").style.display="block";
}
function level2(){
    // document.getElementById("level1").style.display="none";
    // document.getElementById("level2").style.display="block";
    location.href="file:///C:/Users/iqra%20com/Desktop/hackthon/bubblepop.html"

}