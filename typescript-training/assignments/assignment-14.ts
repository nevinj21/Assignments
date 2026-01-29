let val : number[] = [12,34,11,36,87,98,93]

for (let i : number = 0;i < val.length;i++)
{
    for (let j : number = i+1;j < val.length;j++)
    {
        if(val[i]! > val[j]!)
        {
            let temp = val[i]!;
            val[i]! = val[j]!;
            val[j]! = temp;
        }
    }
}
console.log("array in ascending order")
for (let value of val)
{
    console.log(value);
}

let secondLargest : number = val[val.length - 2]!
let thirdLargest :number = val[val.length-3]!
console.log(`Second Largest Number is ${secondLargest}`);
console.log(`Third Largest Number is ${thirdLargest}`);
let sum = secondLargest + thirdLargest
console.log(`The sum of second largest and third largest number is ${sum}`)
