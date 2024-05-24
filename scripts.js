

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

// Uppercase Transformation using map:

console.log("\nUppercase Transformation:");
const provincesInUppercase = provinces.map((province) =>
  province.toUpperCase()
);
console.log("Provinces in Uppercase:", provincesInUppercase);

// Name Lengths using map:

console.log("\nName Lengths:");
const nameLengths = names.map((name) => name.length);
console.log("Length of names:", nameLengths);

// Sorting using sort:

console.log("\nSorting:");
const sortedProvinces = [...provinces].sort();
console.log("Alphabetically sorted provinces:", sortedProvinces);

//Filtering Cape using filter:

console.log("\nFiltering Cape: ");
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log("Provinces without 'Cape':", filteredProvinces);
console.log("Remaining provinces count:", filteredProvinces.length);



  