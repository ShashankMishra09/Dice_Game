randomNumber = Math.floor(Math.random()*6)+1;
diceNumber1 = "dice"+randomNumber+".png";
imgSource = "images/"+diceNumber1;
document.querySelectorAll("img")[0].setAttribute("src",imgSource);


randomNumber2 = Math.floor(Math.random()*6)+1;
diceNumber2 = "dice"+randomNumber2+".png";
imgSource0 = "images/"+diceNumber2;
document.querySelectorAll("img")[1].setAttribute("src",imgSource0);

if(randomNumber>randomNumber2){
    document.querySelector("h1").textContent = "Player one win"
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").textContent = "Player two win"
}
else{
    document.querySelector("h1").textContent = "Match Draw"
}