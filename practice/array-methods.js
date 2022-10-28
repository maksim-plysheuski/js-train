let people = [
    {name: "Max", age: 18, budget: 1200},
    {name: "Bob", age: 15, budget: 4500},
    {name: "Sam", age: 23, budget: 2200},
    {name: "Kim", age: 17, budget: 2350},
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

for (let person of people) {
    console.log(person)
}

//forEach (like for loop)
//takes 3 params (peron, index, array) returns new array
people.forEach((person, index, peopleArray) => {
    console.log(person)
})

//Map
//takes 3 params (peron, index, array) returns new array
// we can also transform data from people array and save it in new Array
let newArrayPeople = people.map(person => `${person.name} - hello!`)

//Filter
//takes 3 params (peron, index, array) returns new array
const adults = people.filter(person => person.age >= 18)

//Reduce
// для того что бы получить одно какое-то финальное значение, например общий возраст или бюджет всех людей
// принимает два параметра 1) колбэк который принимает два параметра (предыдущее значение(переменная) и текущий элемент массива) 2) и начальное значение пееременной total
/*
let amount = people.reduce((total,person) => {}, 0)*/

let amount = people.reduce((total,person) => {
    return total + person.budget
}, 0)

//Find
//что-бы по условию найти нам нужный элемент
let max = people.find(person => person.name === "Max")

//FindIndex
//работает точно так же как и find, но на выходе возвращает нам индекс
let index = people.findIndex(person => person.name === "Max")
//0

//Some
//возвращает только true или false в зависимости от условия поиска
//Проходит по каждому элементу, если хоть ОДИН элемент вернет ture, то функция вернет true
let areThereAdultsSome = people.some(person => person.age >= 18)
//true


//Every
//возвращает true или false. Проходит по каждому элементу, если все элементы вернут ture, то функция вернет true
let areThereAdultsEvery = people.every(person => person.age >= 18)
//false

let arr = [1, 2 , 3, 4]

//indexOf
//возвращает индекс элемента
//два параметра 1: search value, 2: from index
arr.indexOf(2,3)
//2


//includes
//возвращает boolean, содержится ли элемент в массиве
//два параметра 1: search value, 2: from index
arr.indexOf(3,2)