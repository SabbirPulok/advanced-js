//If a==b , == tries to convert both a & b type to same and then check the value
//For a==b, it both compares the type and value

const a=1;
const b=true;

if(a==b)
{
    console.log("For 1==true : true");
}
else
{
    console.log("For 1==true: False");
}


if(a===b)
{
    console.log("For 1===true : true");
}
else
{
    console.log("For 1===true: False");
}
