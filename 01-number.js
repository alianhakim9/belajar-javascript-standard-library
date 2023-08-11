// basic
const input = "12345";
const number = Number(input);

console.info(typeof input); // string
console.info(typeof number); // number

console.info(Number("salah")); // NaN

// Number static properties
console.info(Number.MAX_VALUE); // 1.7976931348623157e+308
console.info(Number.MIN_VALUE); // 5e-324
console.info(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.info(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.info(Number.NaN);

// Number static method
const data = Number("12345");
console.info(Number.isInteger(data)); // true
console.info(Number.isNaN(data)); // false

// Instance method
const value = Number("12345");
console.info(value.toString(2));
console.info(value.toLocaleString("id-ID"));
console.info(value.toLocaleString("en-US"));
