
let count = 0;
function clickme(){
    const click = document.getElementById("count");
    count++;
    click.innerText = count;
}

const btn = document.getElementById("minus-btn");
btn.addEventListener("click", function(){
    const click = document.getElementById("count");
    count--;
    click.innerText = count;
})