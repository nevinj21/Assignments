
// function PrimeOrNot(num: number): void {
//     if (num <= 1) {
//         console.log("Its not a Prime Number")
//         return;
//     }
//     for (let i: number = 2; i < num; i++) {
//         if (num % i == 0) {
//             console.log("Its not a Prime Number");
//             return;
//         }
//     }
//     console.log("Its a Prime Number")
// }

// PrimeOrNot(18)


//Both are correct another alternative way of finding whether its a Prime Number or Not


function PrimeOrNot(num: number): void {
    let prime : boolean = true;
    if (num <= 1) {
        console.log(`${num} is not a Prime Number`)
        prime = false;
    }
    for (let i: number = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    if(prime == true)
    {
        console.log(`${num} is a Prime Number`)
    }
    else{
        console.log(`${num} is not a Prime Number`)
    }
}

PrimeOrNot(1)