const numbers = [3,6,9,12,15];

const sqNumbers = numbers.map(function(element,index,array)
{
    return element*element;
})

console.log("Square Numbers: ",sqNumbers);
//We can pass 3 arg on the map function element,index,array

const square = numbers.map(x => x*x)
console.log(square);

const greater100 = square.filter(x => x>100)
console.log(greater100);

const isGreater100 = square.find(x => x>100)
console.log(isGreater100);

const maxItem = square.reduce( (x,y) => Math.max(x,y));
console.log("Max Item: ",maxItem);