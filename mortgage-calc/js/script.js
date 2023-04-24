function calc() {
    var principal = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    var monthly = Number(document.getElementById("monthly").value);
    var N = 12;
    var j = (1 + rate/12)**(12*years);
    var output = principal * j - (monthly(j-1)) / (rate/12);

    document.getElementById("output").innerHTML = output;

}

function reset() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("years").value = "";
    document.getElementById("monthly").value = "";
}