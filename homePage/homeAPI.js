let quoteSection = document.getElementById("qQuote");
let authorSection = document.getElementById("author");

fetch("https://zenquotes.io/api/today/")
.then(function(response) {
    return response.json();
})
.then(function(myJson){
    quoteSection.innerHTML = myJson[0].q;
    authorSection.innerHTML = " - " + myJson[0].a;
});