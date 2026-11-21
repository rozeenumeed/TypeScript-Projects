"use strict";
let boxes = document.querySelectorAll(".box");
let Person1 = document.querySelector("#p1");
let Person2 = document.querySelector("#p2");
let BoxContainer = document.querySelector(".boxes");
let SuccessCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let boxesData = [];
let count = true;
let p1M = 0;
let p2M = 0;
let score = 0;
let gameOver = false;
// Har box ka index aur shape save karo
boxes.forEach(function (box, index) {
    boxesData.push({
        indexes: index,
        shape: ""
    });
});
boxes.forEach(function (box, index) {
    box.addEventListener("click", function () {
        // Filled box dobara click na ho
        if (gameOver || boxesData[index].shape !== "") {
            return;
        }
        if (count === true) {
            box.textContent = "✔️";
            boxesData[index].shape = "✔️";
            p1M++;
            Person1.textContent = String(p1M);
        }
        else {
            box.textContent = "◯";
            boxesData[index].shape = "◯";
            p2M++;
            Person2.textContent = String(p2M);
        }
        box.classList.add("boxInts");
        score++;
        if (match()) {
            BoxContainer.textContent = count
                ? "Player 1 Wins!"
                : "Player 2 Wins!";
            gameOver = true;
            return;
        }
        if (score === 9) {
            BoxContainer.textContent = "Match Draw!";
            gameOver = true;
            return;
        }
        count = !count;
    });
});
function match() {
    for (let i = 0; i < SuccessCombo.length; i++) {
        let c1 = SuccessCombo[i];
        let shape1 = boxesData[c1[0]].shape;
        let shape2 = boxesData[c1[1]].shape;
        let shape3 = boxesData[c1[2]].shape;
        if (shape1 !== "" &&
            shape1 === shape2 &&
            shape2 === shape3) {
            return true;
        }
    }
    return false;
}
