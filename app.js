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