const numbers = [1,2,3,4,5,6,,7,8,9,0,10,11,12,13];

function print(element) {
    console.log(element);
}

numbers.forEach(print);

// we can also declare functions in-line, which is much more common.

numbers.forEach(function(element) {
    console.log(element);
})

//

movies = [
    {
        name : 'Everything Everywhere All At Once',
        score: 100,
        year: 2020,
    },
    {
        name: 'Nemo',
        score: 50,
        year: 2008,
    },
    {
        name: 'Goldfish',
        score: 90,
        year: 1000,
    },
    {
        name: 'badMovie',
        score: 23,
        year: 2016
    },
    {
        name: 'Quarentined',
        score: 50,
        year: 2020,
    }
    
]

movies.forEach(function(element) {
    console.log(`${element.name} - ${element.score}/100`);
});

// map()

const doubles = numbers.map(function(num) {
    return num * 2;
});

const titles = movies.map(function(movie) {
    return movie.name;
})

// arrow functions

// basic syntax
const add = (x,y) => {
    return x + y;
}

// with a single parameter
const square = x => {
    return x**2;
}

// with no parameters.
const rollDie = () => {
    return Math.floor(Math.random * 6) + 1;
}

// implicit return

const rollD20 = () => (
    Math.floor(Math.random * 20) + 1
);

const sum = (x, y ) => x + y;



// const newMovies = movies.map(function (movie) {
//     return `${movie.name} - ${movie.score / 10}}`;
// });

const newMovies = movies.map(movie => (
    `${movie.name} - ${movie.score / 10}`
));


// pause execution after a delay in milliseconds (with a callback)
setTimeout(() => {
    console.log("Are you still there?");
}, 5000)

// repeat a callback every interval specified in milliseconds.
// we store the id so we can stop execution with clearInterval()
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

// we may have multiple functions executing on intervals at once so that's
// why we have an id system.
clearInterval(id);

// filter() example

// create an array of only even numbers
const evenNumbers = numbers.filter((el) => {
    if (el % 2 == 0) return true;
});

// print our evenNumbers array.
for (let num of evenNumbers) {
    console.log(num);
}

// let's create an array of every movie made in 2020.

const coronaMovies = movies.filter((movie) => {
    if (movie.year === 2020) return movie;
})

// every & some examples

const examScores = [87, 75, 89, 90, 93, 97, 95, 92, 91];

const passingScore = 75;

const result = examScores.every(score => {
    if (score >= passingScore) return true;
});

if (result === true)
{
    console.log("Congrats! All students passed.");
} else
    console.log("someone failed.....");

// some() example

// do we have a movie created after 2015?

movies.some((movie) => {
    if (movie.year >= 2015) return true;
});


// Reduce function

const prices = [9.99, 4.99, 3.99, 0.99, 99.99, 1.43, 2.43];

let total = 0;
for (let price of prices) {
    total += price;
}


let reduceTotal = prices.reduce( (accumulator, currentPrice) => {
    return accumulator + currentPrice;
});

console.log(total);       // same #
console.log(reduceTotal); // same #

// okay but what about something practical?
// lets try to find the maximum value in an array

let maxValue = prices.reduce( (maxValue, currentPrice) => {
    if (maxValue === undefined) {
        maxValue = currentPrice;
    }
    if (currentPrice > maxValue)
    {
        maxValue = currentPrice;
    }
    return maxValue;
})

console.log(maxValue);