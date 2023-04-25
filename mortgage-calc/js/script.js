function calc() {
    var P = Number(document.getElementById("principal").value);
    var R = Number(document.getElementById("rate").value);
    var T = Number(document.getElementById("years").value);
    var M = Number(document.getElementById("monthly").value);
    var N = 12;
    var B = P*(1+(R/N))**(N*T) - (M*((1+(R/N))**(N*T)-1))/(R/N);

    document.getElementById("output").innerHTML = "Your total is $" + B.toFixed(2);

}

function reset() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("years").value = "";
    document.getElementById("monthly").value = "";
}