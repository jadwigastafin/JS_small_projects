
const secondhand = document.querySelector(".secondHand");
const minhand = document.querySelector(".minuteHand");
const hourhand = document.querySelector(".hourHand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minhand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hoursDeg}deg)`;

}

setInterval(setDate, 1000);