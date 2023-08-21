var y = document.getElementById("temp").value;
let z = document.getElementById('which_temp');
function convert() {
let res = y * ( 9 / 5 ) + 32;
document.getElementById("result").innerHTML = res;
}