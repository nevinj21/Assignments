let str: string = "Java programming is fun and challenging";
let strSentence: string[] = str.split(' ');

// Using reverse function also works
// let revSentence : string[] = strSentence.reverse();
// let rev : string = revSentence.join(" ")

//Alternative Method without using function
let reversedString: string = ""

for (let i = strSentence.length - 1; i >= 0; i--) {

    //for making the first letter capital below two lines
    let word : string = strSentence[i]!;
    let capital : string = word[0]!?.toUpperCase() + word.substring(1)

    // if not required to capitalize the first letter the code should be like this below
    // reversedString = reversedString + strSentence[i] + " " 
    
    reversedString = reversedString + capital + " "
}

console.log(`The entered string is ${str}`)
console.log(`The reversed string is ${reversedString}`);

console.log(`Total number of words in the sentence is ${strSentence.length}`)

