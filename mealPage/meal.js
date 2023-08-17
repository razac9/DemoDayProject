let img1Section = document.getElementById("img1");
let img2Section = document.getElementById("img2");
let img3Section = document.getElementById("img3");

let title1Section = document.getElementById("fTitle1");
let title2Section = document.getElementById("fTitle2");
let title3Section = document.getElementById("fTitle3");

let calories1Section = document.getElementById("calories1");
let calories2Section = document.getElementById("calories2");
let calories3Section = document.getElementById("calories3");

let carbs1Section = document.getElementById("carbs1");
let carbs2Section = document.getElementById("carbs2");
let carbs3Section = document.getElementById("carbs3");

let fat1Section = document.getElementById("fat1");
let fat2Section = document.getElementById("fat2");
let fat3Section = document.getElementById("fat3");

let protein1Section = document.getElementById("protein1");
let protein2Section = document.getElementById("protein2");
let protein3Section = document.getElementById("protein3");


// var firebaseRef = firebase.database().ref('users')
// firebaseRef.once("value", function(snapshot){




// })




fetch("https://api.spoonacular.com/recipes/findByNutrients?apiKey=ea4307d648244f06a785b48a4b587505&minCalories=600&maxCalories=750&minProtein=35&number=3")
.then(function(response) {
    return response.json();
})
.then(function(myJson){
    console.log(myJson[0])
    img1Section.innerHTML = `<img src = "${myJson[0].image}" width = "275px" height = "204px">`
    img2Section.innerHTML = `<img src = "${myJson[1].image}" width = "275px" height = "204px">`
    img3Section.innerHTML = `<img src = "${myJson[2].image}" width = "275px" height = "204px">`
    
    title1Section.innerHTML = `<p>Title: ${myJson[0].title}</p>`
    title2Section.innerHTML = `Title: ${myJson[1].title}`
    title3Section.innerHTML = `Title: ${myJson[2].title}`

    calories1Section.innerHTML = `Calories: ${myJson[0].calories}`    
    calories2Section.innerHTML = `Calories: ${myJson[1].calories}`    
    calories3Section.innerHTML = `Calories: ${myJson[2].calories}`
    
    carbs1Section.innerHTML = `Carbs: ${myJson[0].carbs}`
    carbs2Section.innerHTML = `Carbs: ${myJson[1].carbs}`
    carbs3Section.innerHTML = `Carbs: ${myJson[2].carbs}`

    fat1Section.innerHTML = `Fat: ${myJson[0].fat}`
    fat2Section.innerHTML = `Fat: ${myJson[1].fat}`
    fat3Section.innerHTML = `Fat: ${myJson[2].fat}`

    protein1Section.innerHTML = `Protein: ${myJson[0].protein}`
    protein2Section.innerHTML = `Protein: ${myJson[1].protein}`
    protein3Section.innerHTML = `Protein: ${myJson[2].protein}`
});