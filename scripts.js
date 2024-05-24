

const names = [
    "Ashwin",
    "Sibongile",
    "Jan-Hendrik",
    "Sifso",
    "Shailen",
    "Frikkie",
  ];
  
  const provinces = [
    "Western Cape",
    "Gauteng",
    "Northern Cape",
    "Eastern Cape",
    "KwaZulu-Natal",
    "Free State",
  ];
  
  const products = [
    { product: "banana", price: "2" },
    { product: "mango", price: "6" },
    { product: "potato", price: "7" },
    { product: "avocado", price: "8" },
    { product: "coffee", price: "10" },
    { product: "tea", price: "12" },
  ];

  // Using forEach:

console.log("Names:");
names.forEach((name) => {
  console.log(name);
});

console.log(" ");
console.log("Provinces:");
provinces.forEach((province) => {
  console.log(province || "No province");
});

console.log(" ");
console.log("Names Linked to Respective Provinces:");
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index] || "No province"})`);
});
  