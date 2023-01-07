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
    },
    {
        name: 'Nemo',
        score: 50,
    },
    {
        name: 'Goldfish',
        score: 90
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

setInterval(() => {
    console.log(Math.random());
}, 2000);