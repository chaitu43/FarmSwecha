function testSoil() {
	const ph = parseFloat(document.getElementById("ph").value);
	const nitrogen = parseFloat(document.getElementById("nitrogen").value);
	const phosphorus = parseFloat(document.getElementById("phosphorus").value);
	const potassium = parseFloat(document.getElementById("potassium").value);

	let results = "";

	if (ph>=1 && ph < 7) {
		results +=  "The soil is too acidic. ";
	} else if (ph > 7 && ph <= 14) {
		results += "The soil is too alkaline. ";
	}
	else if (ph == 7) {
		results += "The soil is optimal. ";
	}
	else if (ph < 1 || ph > 14) {
		results += "The soil pH is invalid. check your input.";
	}

	if (nitrogen < 25) {
		results += "The soil is deficient in nitrogen. ";
	}
	else if (nitrogen > 25 && nitrogen < 50) {
		results += "The soil is optimal in nitrogen. ";
	}
	else if (nitrogen > 50) {
		results += "The soil is too rich in nitrogen. ";
	}
	if (phosphorus < 25) {
		results += "The soil is deficient in phosphorus. ";
	}
	else if (phosphorus > 25 && phosphorus < 50) {
		results += "The soil is Healthy in phosphorus. ";
	}
	else if (phosphorus > 50) {
		results += "The soil is too rich in phosphorus. ";
	}
	if (potassium < 50) {
		results += "The soil is deficient in potassium. ";
	}
	else if (potassium > 50 && potassium < 100) {
		results += "The soil is Moderate in potassium. ";
	}
	else if (potassium > 100 && potassium < 150) {
		results += "The soil is ideal in potassium. ";
	}
	else if (potassium > 150) {
		results += "The soil is High in potassium. ";
	}

	if(!ph && !nitrogen && !potassium && !phosphorus)
	{
		document.getElementById("results").innerHTML = results;
	}
	else
	{
		document.getElementById("results").innerHTML = 'Result: ' +results;
	}

    

}

