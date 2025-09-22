let products= [
    {sku:"B-100", name: "Airpods", category: "electronics", price: 60.00, inventory: 4},
    {sku:"H-300", name: "Salami", category: "food", price: 12.99, inventory: 7},
    {sku:"R-200", name: "Keyboards", category: "electronics", price: 39.99, inventory: 11},
    {sku:"J-700", name: "Crabs", category: "food", price: 14.99, inventory: 18},
    {sku:"M-900", name: "Hoodie", category: "apparel", price: 49.99, inventory: 16},
];


for (let product of products) {
   let discount = 0;
   switch (product.category) {
    case "electronics":
        discount = .2
        break;
    case "food":
    case "apparel": 
    discount = .15
    break
    default:
        discount = 0;
        break;
   } 
   //Place the promoPrice integration here
   let promoPrice= product.price * (1-discount)
console.log(promoPrice)
product.promoPrice = promoPrice;
}