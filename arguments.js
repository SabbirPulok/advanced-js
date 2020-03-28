function sum( x,y)
{
    let args = [...arguments];
    let result = 0;
    for(let i=0;i<args.length;i++)
    {
        result+=args[i];
    }
    return result;
}
console.log("Summation : ",sum(2,3,4,5,6,7));