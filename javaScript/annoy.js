/* var odgovor= prompt("jesmo stigli");

while(odgovor!=="yes" && odgovor!=="yaa"){
    var odgovor = prompt("jesmo stigli brate");
}

alert("jee stigli smo "); */

/* if(odgovor=="yes"){
    alert("jesmo brate")
} */

var odgovor = prompt("jesmo stigli");

while (odgovor.indexOf("yes")===-1) {
    var odgovor = prompt("jesmo stigli brate");
}
alert("jesmo brate");