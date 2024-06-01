function hiThere() {
    alert('Hi there!');
}

let a = 0;
let b = 0;
let c = 0;

// function changebg() {
//     let cng = document.getElementById("bg");
//     cng.style.backgroundColor = `rgb(${a % 256},${b % 256},${c % 256})`;
//     a += Math.floor(Math.random() * 256);
//     b += Math.floor(Math.random() * 256);
//     c += Math.floor(Math.random() * 256);
// }

document.addEventListener('keydown', changebg);

function date() {
    document.getElementById("dt").innerHTML=Date()
}