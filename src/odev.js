let isPrime = function isPrime(num) {
    if (num <= 1) return false; 
    if (num % 2 == 0 && num > 2) return false; 
    for (let i = 3; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
function findPrime(...params) {
    params.forEach(element => {
        if (isPrime(element)) {
            console.log(`${element} is a prime number`)
        }else{
            console.log(`${element} is not a prime number`)
        }
    });
}
findPrime(2,5,8,21,13)
///////////////////////////////////////////////////////////////
let total,total2=0
function friendlyNumber(param,param2) {
    for (let index = 0; index < param; index++) {
        if (param%index==0) {
            total+=index
        }
    }
    for (let index = 0; index < param2; index++) {
        if (param2%index==0) {
            total2+=index
        }
    }

    return (total = param2 && total2 == param) ? `${param} and ${param2} are friendly numbers.` : `${param} and ${param2} are not friendly numbers.`
}

console.log(friendlyNumber(220,284))
console.log(friendlyNumber(31,62))
///////////////////////////////////////////////////////

function perfectNumber() {
    for (let index = 1; index < 1001; index++) {
        let total= 0;
        for (let i = 1; i < index; i++) {
            if(index % i == 0 ){
               total += i 
            } 
        }
        if(total == index)  {
            console.log(index +" is a perfect number! ")
        }
    }
}
perfectNumber()
/////////////////////////////////////////////////////////////
function primeNumbers() {
    for (let index = 0; index < 1001; index++) {
        if (isPrime(index)) {
            console.log(index)
        }else{
        continue
    }
  }
}
primeNumbers()
/////////////////////////////////////////////////////////////


