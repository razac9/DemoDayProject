const signUpButton = document.getElementById("signUp");

// function register(event){
//     event.preventDefault();
//     fullName = document.getElementById("fullName").value;
// }



signUpButton.addEventListener("click", event =>{
    event.preventDefault();
    fullName = document.getElementById("fullName").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    age = document.getElementById("age").value;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    goal1 = document.getElementById("goal1").value;
    goal2 = document.getElementById("goal2").value;
    goal3 = document.getElementById("goal3").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
            var user = auth.currentUser
            alert("Account Created!")
    
            var database_ref = database.ref();
    
            var user_data = {
                email: email,
                full_name: fullName,
                age: age,
                height: height,
                weight: weight,
                goal1: goal1,
                goal2: goal2,
                goal3: goal3,
                last_login: Date.now()
            }
    
            database_ref.child("users/" + user.uid).set(user_data);
    
    })
    .catch(function(error){
            var error_code = error.code;
            var error_message = error.message;
            alert(error_message)
    })
})

// auth.createUserWithEmailAndPassword(email, password)
// .then(function(){
//         var user = auth.currentUser
//         alert("Account Created")

//         var database_ref = database.ref();

//         var user_data = {
//             email: email,
//             full_name: fullName,
//             age: age,
//             height: height,
//             weight: weight,
//             goal1: goal1,
//             goal2: goal2,
//             goal3: goal3,
//             last_login: Date.now()
//         }

//         database_ref.child("users/" + user.uid).set(user_data);

// })
// .catch(function(error){
//         var error_code = error.code;
//         var error_message = error.message;
//         alert(error_message)
// })