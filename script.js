name = "Justin";
var name;
console.log(name)

setName();
function setName (){
    var name = "Justin";
    console.log(name);
}

averageNum(6,20);
function averageNum(num1,num2) {
    let sum = (num1 + num2);
    console.log(sum/2);
}

let fruitsArr = ["Mandarin", "Pineapple", "Apples"];
let leastFav;

fruits();
function fruits () {
    leastFav = fruitsArr[1];
    favFruit = fruitsArr[2];
    console.log(fruitsArr[0])
    function pfavFruit() {
        console.log(favFruit)
    }
    pfavFruit();
    console.log(leastFav);
}

sayHello();
function sayHello (){
    console.log("Hello" + " " + name);
}

let showAlert = function alertMsg(){
    alert("You have been exposed !!")
}
showAlert();