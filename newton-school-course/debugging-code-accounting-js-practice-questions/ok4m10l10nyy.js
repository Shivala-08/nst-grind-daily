// function code (student must fix errors)
function calculateFinalAmount() {
  let itemPrice = 500;
  const discount = 50;
  var finalPrice = itemPrice - discount;
  console.log("Total: " + finalPrice);
  let tax = itemPrice * 0.18;
  let finalAmount = finalPrice + tax;
  console.log("Tax (18%): " + tax);
  console.log("Final amount: " + finalAmount);
}