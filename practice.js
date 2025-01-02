const p = document.querySelector("p");
p.innerText.split("");

function hl8Char() {
  for (let i = 0; i < p.length; i++) {
    if (p[i].length === 8) {
      p[i].style.backgroundColor = "yellow";
    }
  }
}

hl8Char();