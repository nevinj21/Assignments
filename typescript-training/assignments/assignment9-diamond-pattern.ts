const pattern = (num: number): void => {

    //upper part
    for (let i = 1; i <= num; i++) {
        let row = "";
        for (let space = 1; space <= (num - i); space++) {
            row = row + " "
        }
        for (let star = 1; star <= 2 * i - 1; star++) {
            row = row + "*"
        }
        console.log(row)
    }



    //lower part
    for (let i = num - 1; i >= 1; i--) {
        let row = "";
        for (let space = 1; space <= num - i; space++) {
            row = row + " "
        }
        for (let star = 1; star <= 2 * i - 1; star++) {
            row = row + "*"
        }
        console.log(row)
    }

}
pattern(5)
