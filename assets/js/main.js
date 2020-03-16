
var cpuCall;
var userCall;
var roundSelected = 0;
var i = 0;
var cpuWins = 0;
var userWins = 0;

document.getElementById("restart").addEventListener("click", () => {
    location.reload()
});
document.getElementById("rock").addEventListener("click", () => {
    cpuCall = Math.floor(Math.random() * 3);
    calculate("rock", cpuCall);
})
document.getElementById("paper").addEventListener("click", () => {
    cpuCall = Math.floor(Math.random() * 3);
    calculate("paper", cpuCall);
})
document.getElementById("scissors").addEventListener("click", () => {
    cpuCall = Math.floor(Math.random() * 3);
    calculate("scissors", cpuCall);
})

function roundSelector() {
    round5 = document.getElementById("round-5").checked;
    round10 = document.getElementById("round-10").checked;
    round15 = document.getElementById("round-15").checked;
    round20 = document.getElementById("round-20").checked;
    if (round5 === true) {
        roundSelected = 5;
        document.getElementById("round-selector").style.display = "none";
    } else if (round10 === true) {
        roundSelected = 10;
        document.getElementById("round-selector").style.display = "none";
    } else if (round15 === true) {
        roundSelected = 15;
        document.getElementById("round-selector").style.display = "none";
    } else if (round20 === true) {
        roundSelected = 20;
        document.getElementById("round-selector").style.display = "none";
    }
    document.getElementById("round-counter-display").innerText = i + " / " + roundSelected;
    document.getElementById("score-display").innerHTML = userWins + " : " + cpuWins;
    document.getElementById("play-ground").style.display = "block"
}

function calculate(user, cpu) {
    if (cpu == 0) {
        cpuCall = "rock"
    } else if (cpu == 1) {
        cpuCall = "paper";
    } else if (cpu == 2) {
        cpuCall = "scissors";
    }
    userCall = user;
    i++;
    if (userCall == cpuCall) {
        document.getElementById("result-display").innerHTML = "This round is draw, YOU and CPU both pick: " + cpuCall;
        document.getElementById("round-counter-display").innerText = i + " / " + roundSelected;
        var obj = document.getElementById(`${userCall}`);
        var orignalBoxShadow = obj.style.boxShadow;
        var originalBorder = obj.style.border;
        var originalColor = obj.style.color;
        obj.style.boxShadow = "0px 0px 40px rgba(255, 255, 255, 0.8)";
        obj.style.border = "3px solid white";
        obj.style.color = "white";
        setTimeout(function () {
            obj.style.boxShadow = originalColor;
            obj.style.border = originalBorder;
            obj.style.color = originalColor;
        }, 1000);
    } else if ((userCall == "rock" && cpuCall == "scissors") || (userCall == "scissors" && cpuCall == "paper") || (userCall == "paper" && cpuCall == "rock")) {
        document.getElementById("result-display").innerHTML = "You won this round, you pick: " + userCall + " and CPU pick: " + cpuCall;
        document.getElementById("round-counter-display").innerText = i + " / " + roundSelected;
        userWins++;
        document.getElementById("score-display").innerHTML = userWins + " : " + cpuWins;
        var obj = document.getElementById(`${userCall}`);
        var orignalBoxShadow = obj.style.boxShadow;
        var originalBorder = obj.style.border;
        var originalColor = obj.style.color;
        obj.style.boxShadow = "0px 0px 40px rgba(0, 255, 0, 0.8)";
        obj.style.border = "3px solid green";
        obj.style.color = "green";
        setTimeout(function () {
            obj.style.boxShadow = originalColor;
            obj.style.border = originalBorder;
            obj.style.color = originalColor;
        }, 1000);
    } else {
        document.getElementById("result-display").innerHTML = "CPU won this round, you pick: " + userCall + " and CPU pick: " + cpuCall;
        document.getElementById("round-counter-display").innerText = i + " / " + roundSelected;
        cpuWins++;
        document.getElementById("score-display").innerHTML = userWins + " : " + cpuWins;
        var obj = document.getElementById(`${userCall}`);
        var orignalBoxShadow = obj.style.boxShadow;
        var originalBorder = obj.style.border;
        var originalColor = obj.style.color;
        obj.style.boxShadow = "0px 0px 40px rgba(255, 0, 0, 0.8)";
        obj.style.border = "3px solid red";
        obj.style.color = "red";
        setTimeout(function () {
            obj.style.boxShadow = originalColor;
            obj.style.border = originalBorder;
            obj.style.color = originalColor;
        }, 1000);
    }
    if (userWins == parseInt(roundSelected / 2) + 1) {
        setTimeout(function () { alert("Congratulation you WON!! Do you want to play another round?"); location.reload() }, 500);
    }
    if (cpuWins == parseInt(roundSelected / 2) + 1) {
        setTimeout(function () { alert("Sorry you LOSE!! Do you want to play another round?"); location.reload() }, 500);
    }
    if (i == roundSelected) {
        if (userWins > cpuWins) {
            setTimeout(function () { alert("Congratulation you WON!! Do you want to play another round?"); location.reload() }, 500);
        } else if (userWins < cpuWins) {
            setTimeout(function () { alert("Sorry you LOSE!! Do you want to play another round?"); location.reload() }, 500);
        } else {
            setTimeout(function () { alert("Match result is DRAW!! Do you want to play another round?"); location.reload() }, 500);
        }
    }
}