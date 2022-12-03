const btnEl = document.querySelector('.btn');
console.log(btnEl)
const span = document.getElementsByTagName('span');
console.log(span) 

btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);
     
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
    // span.style.color = "green"
});