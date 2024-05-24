// string
let firstName = 'tufan'
console.log(`type: ${typeof firstName} / output: ${firstName}`);
// string end

// number 
let age = 25
console.log(`type: ${typeof age} / output: ${age}`);
// number end

// boolean
let isStudent = true
console.log(`type: ${typeof isStudent} / output: ${isStudent}`);
let isTeacher = false
console.log(`type: ${typeof isTeacher} / output: ${isTeacher}`);
// boolean end

// undefined
let car
console.log(`type: ${typeof car} / output: ${car}`);
// undefined end

// null
let color = null
console.log(`type: ${typeof color} / output: ${color}`);
// null end

// array
let count = 841
let numbers = [1, 2, 3, 4, 5, count, country = {
    countName: 'Turkey',
}]
console.log(`type: ${typeof numbers} / output: ${numbers}`);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[5]);
console.log(numbers[6].countName);
// array end

// object
let city = 'İstanbul'
let user = {
    name: 'tufan',
    age: 21,
    isDeveloper: true,
    isCity: city
}
console.log(`type: ${typeof user} / output: ${user}`);
console.log(user.name);
console.log(user.age);
console.log(user.isDeveloper);
console.log(user.isCity);
// object end

// function
function sayHello() {
    console.log('Hello World');
}
console.log(`type: ${typeof sayHello} / output: ${sayHello}`);
// function end

// set()
let set = new Set([1, 2, 3, 4, 5, 6, 7, 8,])
console.log(`type: ${typeof set} / output: ${set}`);
// set() end

// map()
let map = new Map([['name', 'tufan'], ['age', 21], ['city', 'istanbul']])
console.log(`type: ${typeof map} / output: ${map}`);
// map() end

// date()
let today = new Date()
console.log(today);
let date = new Date()
console.log(`
Day: ${date.getDate()}
Month: ${date.getMonth() + 1}
Year: ${date.getFullYear()}
Today:${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
`);
// date() end
