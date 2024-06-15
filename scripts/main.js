var myHeading = document.querySelector("h1"); //使用queryselector函式以此引用h1的物件
var myButton = document.querySelector("button");
var SwitchImage = document.querySelector("img");
var count = 0;
var imgArray = ["images/FirstCommission.png", "images/SecondCommission.png", "images/ThirdCommission.png", "images/FouthCommission.png", "images/FifthCommission.png"];


SwitchImage.onclick = function (){
    var number = ['一','二','三','四','五'];    
    if(count < 4) {
        count++
        SwitchImage.setAttribute("src", imgArray[count]);
        myHeading.textContent = "第"+number[count]+"期團";
    }
    else if (count === 4) {
        count = 0;
        SwitchImage.setAttribute("src", imgArray[count]);
        myHeading.textContent = "第" + number[count] + "期團";
    }
}

function setUserName() {
    var UserName = prompt("Please enter your name.");
    if(!UserName || UserName === null) {
        setUserName();
    }
    else {
        localStorage.setItem("name", UserName);
        myHeading.innerHTML = "Welcome Hunter, " + UserName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}