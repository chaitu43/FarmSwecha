function calculatePrice() {
  var product = document.getElementById("product").value;
  var quantity = document.getElementById("quantity").value;
  var price;

  if (product === "rice") {
    price = 3150;
  } else if (product === "cheruku") {
    price = 3500;
  } else if (product === "jowar") {
    price = 2990;
  } else if (product === "mirapakayalu") {
    price = 28000;
  } else if (product === "mokajonna") {
    price = 2017;
  }
  var totalPrice = price * quantity;

  document.getElementById("result").innerHTML = "The total price for " + quantity + " " + product + "(s) is " + totalPrice.toFixed(2);
}
