let v;
console.log(v);

function simple(a,b)
{
    let c=a+b;
    console.log("Sum : ",c);
}

result = simple(2,3);
console.log(result);

let obj = {id:4, name:"student"};
console.log("Student Name: ",obj.name," & Age: ",obj.age);

let a=[1,2,3,4];
for(let i=0;i<6;i++)
{
    console.log("Array [",i+1,"] : ",a[i]);
}

for(let i =0;i<4;i++)
{
    a.pop();
}
console.log("Array ",a);

//If we assigned any value explicitly as null
let c=null;
console.log(c);