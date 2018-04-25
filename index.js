const button = document.getElementById(`lucky-number-button`);
const randomNumEle = document.getElementById(`random-number`);


button.addEventListener(`click`, () => {
    randomNumEle.innerHTML = (Math.floor(Math.random()*100));
    button.disabled = true;
});
