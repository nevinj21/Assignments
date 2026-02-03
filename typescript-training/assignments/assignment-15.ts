let str: string = '()())'
let open = 0;
//let close = 0;
let pairs = 0
for (let ch of str) {
    if (ch === '(') {
        open = open + 1
    }
    if ((ch === ')') && (open > 0)){
        open = open -1
        pairs = pairs + 1
    }
}

console.log(pairs * 2)

