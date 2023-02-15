//Bai01
console.log("Bai01");
function str(){
    const result01 = "a".repeat(10);
    console.log(result01);
}
str();

//Bai02
console.log("Bai02");
function repeatString02(str) {
  let result02 = "";
  for (let i = 0; i < 10; i++) {
    result02 += str + "-";
  }
  return result02.slice(0, -1);
}
console.log(repeatString02("a"));

//Bai03
console.log("Bai03");
function repeatString03(str, n) {
  let result03 = "";
  for (let i = 0; i < n; i++) {
    result03 += str + "-";
  }
  return result03.slice(0, -1);
}
console.log(repeatString03("a", 10));

//Bai04
console.log("Bai04");
function sumDivisibleByFive(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumDivisibleByFive(100));

//Bai05
console.log("Bai05");
function sphericalVolume(r){
    const V = 4/3 * 3.14 * r * r * r;
    console.log(V); 
}
sphericalVolume(3);

//Bai06
console.log("Bai06");
function sumBetweenTwoIntegers(a, b) {
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumBetweenTwoIntegers(3, 7));

//Bai07
console.log("Bai07");
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(9));

//Bai08
console.log("Bai08");
function sumPrimes(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(sumPrimes(10));

//Bai09
console.log("Bai09");
function sumDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumDivisors(10));
