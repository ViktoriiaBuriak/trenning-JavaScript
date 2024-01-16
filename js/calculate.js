function calculateAverage(numbers) {
  if (numbers.length > 0) {
    const sum = numbers.reduce(function (acumulator, currentVaalue) {
      return acumulator + currentVaalue;
    }, 0);
    const average = sum / numbers.length;
    return average;
  } else {
    alert("Please, enter numbers");
  }
}

console.log(calculateAverage([12, 26, 33, 31, 25]));

function isPrime (num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(11)); // Повинно вивести true
console.log(isPrime(25)); // Повинно вивести false
console.log(isPrime(2));  // Повинно вивести true