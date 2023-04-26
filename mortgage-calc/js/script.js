function calc() {
    var P = Number(document.getElementById("principal").value);
    var R = Number(document.getElementById("rate").value);
    var T = Number(document.getElementById("years").value);
    var M = Number(document.getElementById("monthly").value);
    var N = 12;
    var B = P*(1+(R/N))**(N*T) - (M*((1+(R/N))**(N*T)-1))/(R/N);

    if (isNaN(B)) {
        document.getElementById("output").innerHTML = "Bro enter stuff, you wack";
    }
    else if (B<0) {
        document.getElementById("output").innerHTML = "I'm giving you money!!!";
    }
    else {
        document.getElementById("output").innerHTML = "Your total is $" + B.toFixed(2);
    }

}

function reset() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("years").value = "";
    document.getElementById("monthly").value = "";
}