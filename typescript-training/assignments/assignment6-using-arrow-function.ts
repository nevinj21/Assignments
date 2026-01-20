const PrimeOrNot = (num: number): void  => {
    if (num <= 1) {
        console.log("Its not a Prime Number")
        return;
    }
    for (let i: number = 2; i < num; i++) {
        if (num % i == 0) {
            console.log("Its not a Prime Number");
            return;
        }
    }
    console.log("Its a Prime Number")
}

PrimeOrNot(15)