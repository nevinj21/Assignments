const pat = (n: number): void => {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let space = 1; space <= (n - i); space++) {
            row = row + " "
        }
        for (let stars = 1; stars <= i; stars++) {
            row = row + "*"
        }
        console.log(row)
    }
}
pat(5)