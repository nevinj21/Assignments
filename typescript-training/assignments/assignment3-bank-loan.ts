function bankLoan(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {
    if (creditScore > 750) {
        console.log("Congrats!!! Loan is approved");
    }
    else if (creditScore >= 650) {
        console.log("Needed additional checks");
        if (income >= 50000) {
            console.log("Loan is considered for " + customerName)
            if (isEmployed == true) {
                if (debtToIncomeRatio < 40) {
                    console.log("Congrats!!! Loan is Approved for " + customerName)
                }
                else {
                    console.log("Sorry Loan is rejected for " + customerName + " since debtToIncomeRatio is higher")
                }
            }
            else {
                console.log("Sorry Loan is rejected for " + customerName + " since customer is unemployed")
            }
        }
        else {
            console.log("Sorry Loan is rejected for " + customerName + " since income is less")
        }
    }
    else{
        console.log("Loan is rejected since cibil score is Low");
    }
}

bankLoan("John Doe", 720, 55000.0, true, 35.0);