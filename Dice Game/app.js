const player1Img = document.querySelector(".img1");
const player2Img = document.querySelector(".img2");
const container = document.querySelector('.container')
player1Img.src = "./images/dice6.png";
player2Img.src = "./images/dice6.png";

function randNum() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber
}
container.addEventListener('click', function () {
    playerDice1 = player1Img.setAttribute("src", `./images/dice${randNum()}.png`);
    playerDice2 = player2Img.setAttribute("src", `./images/dice${randNum()}.png`);
})