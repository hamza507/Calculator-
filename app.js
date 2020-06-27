function getNumber(num) {
    var input= document.getElementById("input")
    input.value+=num;
}

function clearinput(num) {
    var input= document.getElementById("input")
    input.value="";
}

function getinput() {
    var input= document.getElementById("input")
    input.value=eval(input.value);
    console.log=(input)
}