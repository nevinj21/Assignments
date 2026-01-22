const power = (base : number,exponential : number) : number => 
{
    let result : number = 1
    if(exponential === 0) return 1

    if (exponential < 0) return (1 / power(base,-exponential))
    
    
    for(let i = 1;i <= exponential; i++)
    {
        
        result = result * base;
    }
    return result
}

console.log(power(2,-2))