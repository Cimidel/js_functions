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


const shoppingBasket = [];
const stockProducts = [
    {
        name: `Hat`,
        price: 30,
        stock: 12
    },
    {
        name:`Tricou`,
        price: 30.99
        stock: 40
    }
];

function moveFromStockToBasket(productName) {
    for (const products of stockProducts) {
        if (productName.name===productName) {
            shoppingBasket.push({name: productName.name, qunatity: 1});
            productName.stock -= 1;
        }
    }

}

console.log(`Current stock:` , stockProducts);
console.log(`Current basket:` , shoppingBasket);

moveFromStockToBasket(`Hat`);
console.log(`Current stock:` , stockProducts);
console.log(`shopping basket:` , shoppingBasket);

//functii anonime

const printHello = function () {
    console.log(`hello`);
};

printHello();

function mapArray(arrayToMap,mappingFunction) {
    const newArray = [];
    for (const elemnt of arraToMap) {
        letmappingFunctionResult = mappingFunction(element)
        newArray.push(mappingFunctionResult);

    }
    return newArray;
}
const arrayToMap = [1, 2, 3];
const doubledArray =mapArray(arrayToMap, function (el) {
    return el * 2;
});

console.log(`doubled2 : ${doubled2}`);

//Aarrow functions 

const sayHelloTo = (personName) => {
    console.log(`Hello ${personName}`);
};
sayHelloTo(`Razvan`);

const getGreeting = 


