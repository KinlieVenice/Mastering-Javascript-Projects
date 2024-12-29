const decrease = document.getElementById('decrease');
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const count = document.getElementById("count");

let counter = 0;

decrease.onclick = function(){
    counter--;
    count.textContent = counter;
}

increase.onclick = function(){
    counter++;
    count.textContent = counter;
}

reset.onclick = function () {
  counter=0;
  count.textContent = counter;
};


