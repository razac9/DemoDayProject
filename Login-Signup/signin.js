const signInButton = document.getElementById("signIn");

signInButton.addEventListener("click", event =>{
    event.preventDefault();
    password = document.getElementById("password").value;
    email = document.getElementById("useremail").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser
        var database_ref = database.ref()
        var user_data = {
            last_login: Date.now()
        }
        database_ref.child('users/' + user.uid).update(user_data)

        alert("Login Complete");
    })
    .catch(function(error){
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message)
    })
    location.href = "../homepage/home.html"
})