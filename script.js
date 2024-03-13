// functii simple

function printDigits() {
    for (let i = 0; i <= 9 ; i++) {
        console.log(`digit: `,i);
    }
}


printDigits();
printDigits();
printDigits();

// functii cu parametri
function arrayHasElement(arrayToCheck, elemnt) {
    for (const el of arrayToCheck) {
        if (el=== elemnt) {
    console.log(`Array ${arrayToCheck} has element ${elemnt}`);
found = true

break;
        }
    }
}
if (found) {
    console.log(`Aray ${arrayToCheck} has element ${element}`);
    else {
        console.log(`Aray ${arrayToCheck} does not have element ${element}`);
    }
}

const array1 = {1, 2, 3, 4, 5};
const array2 = {3, 10, 21};
const valueToCheck1 = 10;
const valueToCheck2 = 30

arrayHasElement(arrai1, valueToCheck1);
arrayHasElement(arrai2, valueToCheck1);
arrayHasElement(arrai1, valueToCheck2);

// functia cu parametri soi return

function removeEvenNumbers(arrayToModify) {
    const newArray = [];
    for (const num in arrayToModify) {
        if ( num % 2 > 0) {
            newArray.push(num);
        }
    }

    return newArray;
}

const array1Modified = removeEvenNumbers (array1);
console.log(`Modified array1 is : ${array1Modified}`);
