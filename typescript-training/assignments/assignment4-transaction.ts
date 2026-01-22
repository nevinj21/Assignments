function Transaction(transactionAmount: number[]): void {
    let credits = 0;
    let debits = 0;
    let creditCount = 0;
    let debitCount = 0;
    let totalAmount = 0;
    let suspiciousTransfer = 0;
    for (let i = 0; i < transactionAmount.length; i++) {
        const value = transactionAmount[i];

        if (value != undefined && value > 0) {
            credits = credits + value;
            creditCount++;
        }
        if (value != undefined && value < 0) {
            debits = debits + value;
            debitCount++;
        }
        if ((value != undefined && value > 10000) || (value != undefined && value < -10000))
        {
            console.log(`Suspicious Credit/Debit Transfer of Amount ${value}`)
            suspiciousTransfer = suspiciousTransfer + 1;
        }
    }
    totalAmount = debits + credits;
    console.log(`Total number of Suspicious Transactions ${suspiciousTransfer}`)
    console.log(`Total number of Debit and Credit Transactions Completed : ${transactionAmount.length}`);
    console.log(`Total Number of Credit Transactions ${creditCount}`);
    console.log(`Total Number of Debit Transactions ${debitCount}`)
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
