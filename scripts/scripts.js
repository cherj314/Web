
function changeModel() {
    if (document.getElementById("model-text").innerHTML==1) {
	   document.getElementById("model-text").innerHTML = 2
	} else {
	   document.getElementById("model-text").innerHTML = 1
}
    recalculate();
}
	
function changeDuration() {
    duration = prompt("Please enter new duration:", "");
    document.getElementById("duration-text").innerHTML = duration;
    recalculate();
}

function recalculate() {
	if (document.getElementById("model-text").innerHTML==1) {
       totalcost = duration * 100;
	} else {
       totalcost = duration * 213;
}
    document.getElementById("calculated-cost").innerHTML = totalcost;
}
