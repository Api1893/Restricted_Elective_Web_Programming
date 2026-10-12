let dog = {
    type:"Dog",
    weight:30,
    breed:"German Shepherd",
    name:"Peter"
};

let myArray = [10,20,30,13,50,60,5];

// -------------------------------------- 1 ---------------------------------
var ausgabe = 0 // Save sum of parameter

function add(parameter1, parameter2) {
    return ausgabe = parameter1 + parameter2
}

add(6, 1)

console.log(ausgabe)
console.log()

// -------------------------------------- 2 ---------------------------------

function anyNumber(...numbers) {
    return numbers
}

let result = anyNumber(2,4,3,0,5,6,1,7)
console.log(result)


// -------------------------------------- 3 ---------------------------------

const rechneOperaton = (array, operator, step) => {
    let sum = 0;

    for (let num of array) {
        sum = num + sum;
    }

    if (operator === '+') {
        return sum + step;
    } else if (operator === '-') {
        return sum - step;
    } else {
        return sum;
    }
};

let ergebnis = rechneOperaton([2, 3, 4, 1, 0], '+', 10);
console.log(ergebnis);

// -------------------------------------- 4 ---------------------------------

function copyDog(dogObjectCopy) {
    let dogCopy = {...dogObjectCopy};

    dogCopy.name = "Cane";
    dogCopy.breed = "Labrador";
    dogCopy.weight = 25;

    return dogCopy;
}

let labradorDog = copyDog(dog);

console.log("Geänderter Hund:", labradorDog); 
console.log("Originaler Hund:", dog);