let ageSection = document.getElementById("pAge");
let weightSection = document.getElementById("pWeight");
let heightSection = document.getElementById("pHeight");
let bmiSection = document.getElementById("pBMI");
let nameSection = document.getElementById("name");

let goal1Section = document.getElementById("pG1");
let goal2Section = document.getElementById("pG2");
let goal3Section = document.getElementById("pG3");

var firebaseRef = firebase.database().ref('users')
firebaseRef.once("value", function(snapshot){
    var data = snapshot.val();
    let name = data["cIie2JuniwSbulagtn4MJERfTgv2"].full_name;
    let age = data["cIie2JuniwSbulagtn4MJERfTgv2"].age;
    let weight = Number(data["cIie2JuniwSbulagtn4MJERfTgv2"].weight);
    let height= data["cIie2JuniwSbulagtn4MJERfTgv2"].height;
    totalInches = Number((height.charAt(0) * 12)) + Number(height.charAt(2));
    bmi = Math.trunc((weight / totalInches**2) * 703)

    nameSection.innerHTML = "Name: " + name;
    ageSection.innerHTML = "Age: " + age;
    weightSection.innerHTML = "Weight: " + weight + " lbs";
    heightSection.innerHTML = "Height: " + height;
    bmiSection.innerHTML = "BMI: " + bmi;
    
    let goal1 = data["cIie2JuniwSbulagtn4MJERfTgv2"].goal1;
    let goal2 = data["cIie2JuniwSbulagtn4MJERfTgv2"].goal2;
    let goal3 = data["cIie2JuniwSbulagtn4MJERfTgv2"].goal3;

    goal1Section.innerHTML = "Goal 1: " + goal1;
    goal2Section.innerHTML = "Goal 2: " + goal2;
    goal3Section.innerHTML = "Goal 3: " + goal3;
})