function calculatePrice() {
  var product = document.getElementById("product").value;
  var quantity = parseFloat(document.getElementById("quantity").value);
  var resultElem = document.getElementById("result");

  // Product price map
  var prices = {
    rice: 3150,
    cheruku: 3500,
    jowar: 2990,
    mirapakayalu: 28000,
    mokajonna: 2017,
    patti: 6500 // Example price for cotton
  };

  // Product name map for display
  var productNames = {
    rice: "Rice (బియ్యం)",
    cheruku: "Sugar Cane (చెరకు)",
    jowar: "Jowar (జొన్న)",
    mirapakayalu: "Chili (మిరపకాయలు)",
    mokajonna: "Corn (మొక్కజొన్న)",
    patti: "Cotton (పత్తి)"
  };

  if (!product || !(product in prices)) {
    resultElem.innerHTML = "Please select a valid product.";
    return;
  }
  if (isNaN(quantity) || quantity <= 0) {
    resultElem.innerHTML = "Please enter a valid quantity.";
    return;
  }

  var price = prices[product];
  var totalPrice = price * quantity;

  resultElem.innerHTML =
    `The total price for <b>${quantity}</b> unit(s) of <b>${productNames[product]}</b> is <span style="color:yellow;">₹${totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>`;
}
