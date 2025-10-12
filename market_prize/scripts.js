function checkPrice() {
	const item = document.getElementById("item").value;
	let results = "";

	const prices = {
		rice: "బియ్యం ధర క్వింటాల్‌కు ₹3150",
		cheruku: "చెరకు ధర క్వింటాలుకు ₹3500",
		jowar: "జొన్న ధర 2990 / క్వింటాల్",
		mokkajona: "మొక్కజొన్న ధర 2017 / క్వింటాల్",
		mirapakayalu: "మిరపకాయలు ధర 28000 / క్వింటాల్",
		patti: "పత్తి ధర క్వింటాల్‌కు 4267"
	};

	if (prices[item]) {
		results = prices[item];
	} else {
		results = "Please select a valid item.";
	}

	document.getElementById("results").innerHTML = results;
}
