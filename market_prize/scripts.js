function checkPrice() {
	const items = parseFloat(document.getElementById("item").value);

	let results = "";

	if (items == "rice") {
		results += " బియ్యం ధర క్వింటాల్‌కు ₹3150 ";
	} 

	if (items == "cheruku") {
		results += " చెరకు ధర క్వింటాలుకు ₹3500 ";
	}

	if (items == "jowar") {
		results += "జొన్న ధర 2990 / క్వింటాల్ ";
	}

	if (items == "mokkajona") {
		results += " మొక్కజొన్న ధర 2017/క్వింటాల్ ";
	}

    if (items == "mirapakayalu") {
		results += " మిరపకాయలు ధర 28000  / క్వింటాల్ ";
	}

    if (items == "patti") {
		results += " పత్తి ధర క్వింటాల్‌కు 4267 ";
	}

	document.getElementById("results").innerHTML = results;
}
