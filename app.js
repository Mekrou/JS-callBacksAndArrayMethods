const numbers = [1,2,3,4,5,6,,7,8,9,0,10,11,12,13];

function print(element) {
    console.log(element);
}

numbers.forEach(print);

// we can also declare functions in-line, which is much more common.

numbers.forEach(function(element) {
    console.log(element);
})