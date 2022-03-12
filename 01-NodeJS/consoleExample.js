const x = 1;
const y = 2;
const z = 3;
const oranges = ['orange', 'orange'];
const apples = ['just one apple'];

//prints the trace
// const function2 = () => console.trace();
// const function1 = () => function2();

const doSomething = () => console.log('test');
const measureDoingSomething = () => {
    console.time('doSomething()');
    //executes the function, and measures the time it takes to execute
    doSomething();
    console.timeEnd('doSomething()');
}

//counts amount of time a string is printed
console.count(
    'The values of x is ' + x +
    ' and has been checked... how many times?'
);

console.count(
    'The values of x is ' + x +
    ' and has been checked... how many times?'
);

console.count(
    'The values of x is ' + y +
    ' and has been checked... how many times?'
);

oranges.forEach(fruit => {
    console.count(fruit);
});

apples.forEach(fruit => {
    console.count(fruit);
});

//it resets the counter
console.countReset('orange');

oranges.forEach(fruit => {
    console.count(fruit);
});

// function1();

measureDoingSomething();

//it changes the output through an escape secuence that
//identifies a color, it does it in a low-level
console.log('\x1b[33m%s\x1b[0m', 'hi!');
