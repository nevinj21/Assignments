let stringParagraph : string = "Java is a popular programming language. Java is used for web development, mobile applications, and more."
let stringParagraphSmallLetter : string = stringParagraph.toLowerCase();
let wordToFind :string = "java";
let wordToFindSmallLetter : string = wordToFind.toLowerCase();

if(stringParagraphSmallLetter.includes(wordToFindSmallLetter))
{
    console.log(`The word ${wordToFind} is included in the given paragraph \n ${stringParagraph}`)
}

else
{
    console.log(`The word ${wordToFind} is not included in the given paragraph \n ${stringParagraph}`)
}