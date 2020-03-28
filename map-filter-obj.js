const students = [
    {id:1, name:"Sunny", marks:77},
    {id:2, name:"Saurov", marks:82},
    {id:3, name:"Sabit", marks:71},
    {id:4, name:"Rabbit", marks:61}
]

const nameArray = students.map( n => n.name)
console.log(nameArray);

const greater70 = students.filter(n => n.marks>75)
console.log(greater70);

const greater = students.find(n => n.marks>75) 
console.log(greater);