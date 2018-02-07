var makeRange = () => {	
	document.getElementById("input").min = getMinimum();
	document.getElementById("input").max = getMaximum();
}

var getMinimum = () => {
	var min = document.getElementById("min-value").value;
	return min;
}

var getMaximum = () => {
	var max = document.getElementById("max-value").value;
	return max;
}

