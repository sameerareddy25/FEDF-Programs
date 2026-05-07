console.log("===== IMPURE FUNCTIONS =====");
let taxRate = 0.2;
function getTotalImpure(price) {
 return price * (1 + taxRate);
}
console.log("First call:", getTotalImpure(100)); // 120
taxRate = 0.5;
console.log("Second call:", getTotalImpure(100)); // 150  different output
function addItemImpure(cart, item) {
cart.push(item); // modifies original
 return cart;
}

let cart1 = ["apple"];
console.log("Before:", cart1);

addItemImpure(cart1, "banana");

console.log("After:", cart1); // changed 
console.log("\n===== PURE FUNCTIONS =====");
function getTotalPure(price, taxRate) {
  return price * (1 + taxRate);
}
console.log("First call:", getTotalPure(100, 0.2)); 
console.log("Second call:", getTotalPure(100, 0.2)); 
function addItemPure(cart, item) {
return [...cart, item]; // new array
}	let cart2 = ["apple"];
console.log("Original cart:", cart2);
let newCart = addItemPure(cart2, "banana");
console.log("After function:");
console.log("Original:", cart2);   
console.log("New:", newCart);