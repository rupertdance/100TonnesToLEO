
window.onload = function() {
prepareEventHandlers();
}

//prepares event handlers
function prepareEventHandlers(){
	var plusbutton = document.getElementById("plus");
	plusbutton.onclick = function(){
		plusQuantity();
	}
	// plusbutton.addEventListener("keypress", plusQuantity, true);

	var minusbutton = document.getElementById('minus');
	//seriously which way is this meant to happen?	
	minusbutton.addEventListener("click", minusQuantity);
}

//checks for positive quant and submits form
function submitIt(){
	if (document.myform.quantity.value < 1){
		return false;
	}
	else return true;
}

function plusQuantity(){
	var number = document.myform.quantity.value;
	number++;
	document.myform.quantity.value = number;
	updateCost();	
}

function minusQuantity(){
	var number = document.myform.quantity.value;

	if(number>0){
	number--;
	document.myform.quantity.value = number;
	updateCost();
	}	
}

function updateCost(){
	// var costField = document.myform.dragoncost.value;
	var unitCost = document.myform.unitcost.value;

	var units = document.myform.quantity.value;
	
	var updatedCost = (unitCost*units).toFixed(2);

	document.myform.dragoncost.value = '$' + updatedCost + 'm';
}