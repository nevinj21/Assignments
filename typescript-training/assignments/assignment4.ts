function Transaction(transactionAmount: number[]): void {
    let credits = 0;
    let debits = 0;
    let totalAmount = 0;
    for (let i = 0; i < transactionAmount.length; i++) {
        const value = transactionAmount[i];

        if (value != undefined && value > 0) {
            credits = credits + value;
        }
        if (value != undefined && value < 0) {
            debits = debits + value;
        }
        if ((value != undefined && value > 10000) || (value != undefined && value < -10000))
        {
            console.log(`Suspicious Credit/Debit Transfer of Amount ${value}`)
        }
    }
    totalAmount = debits + credits;
    console.log(`Total number of Debit and Credit Transactions Completed : ${transactionAmount.length}`);
    console.log(`Total amount credited and debited in account is Credit : ${credits}, Debit : ${debits}`);
    console.log(`Total amount left in bank account :  ${totalAmount}`)
}
let amount: number[] = [
    50000,
    -2000,
    3000,
    -15000,
    -200,
    -300,
    4000,
    -3000
]
Transaction(amount)
