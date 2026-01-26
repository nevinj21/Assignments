let palindromeCheck = (str : string) : void =>
{
    let lowerString :string = str.toLowerCase();
    let rawString : string = lowerString.replace(/[' ', . :]/g,'');
    let revString : string = "";
    for(let i = rawString.length;i >= 0;i--)
    {
        revString = revString + rawString.charAt(i);
    }
   
    if (revString === rawString) console.log (`The string ${rawString} is a Palindrome`)
    
    else console.log(`The given string ${rawString} is not a Palindrome`)
    
}
palindromeCheck("A man, a plan, a canal: Panama");