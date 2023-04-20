function calc() {
    var principle = Number(document.getElementById("principle").value);
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    var monthly = Number(document.getElementById("monthly").value);
    var j = (1 + rate/12)**(12*years);
    output += principle * j - (monthly(j-1)) / (rate/12);
    
    var out = document.getElementById("output");
    out.innerText = output;
}

function reset() {
    var p = document.getElementById("output");
    p.innerText = "";
}