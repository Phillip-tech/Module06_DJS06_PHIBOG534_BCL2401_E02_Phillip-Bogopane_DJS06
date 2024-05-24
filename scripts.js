

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

//Finding 'S' using map and some:

console.log("\nFinding 'S': ");
const namesWithS = names.map((name) => name.includes("S"));
console.log("Names with 'S':", namesWithS);

//Object Mapping using reduce:

console.log("\nObject Mapping:");
const nameByProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log("Names mapped to provinces:", nameByProvince);

//Advanced Exercises (Single console.log Execution):

console.log(
    products.map((product) => product.product),
    products.filter((product) => product.product.length <= 5),
    products
      .filter((product) => !isNaN(product.price))
      .reduce((total, product) => total + Number(product.price), 0),
    products.reduce((acc, product) => acc + product.product + "", "").trim(),
    (() => {
      const sortedPrices = products
        .map((product) => Number(product.price))
        .sort((a, b) => a - b);
      return `Highest: ${sortedPrices[sortedPrices.length - 1]}. Lowest: ${
        sortedPrices[0]
      }`;
    })(),
    Object.entries(products).reduce((acc, [key, value]) => {
      acc.push({ name: value.product, cost: value.price });
      return acc;
    }, [])
  );
  



  