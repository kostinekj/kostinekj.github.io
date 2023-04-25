function calc() {
    var P = Number(document.getElementById("principal").value);
    var R = Number(document.getElementById("rate").value);
    var Y = Number(document.getElementById("years").value);
    var M = Number(document.getElementById("monthly").value);
    var J = 12;
    var output = P*(1+(R/J))**(J*Y) - (M*((1+(R/J))**(J*Y)-1))/(R/J);

    document.getElementById("output").innerHTML = "$" + output.toFixed(2);

}

function reset() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("years").value = "";
    document.getElementById("monthly").value = "";
}