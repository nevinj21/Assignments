const power = (base : number,exponential : number) : number => 
{
    let result : number = 1
    if(exponential === 0) return 1

    if (exponential < 0) 
    {
        base = 1/base;
        exponential = -exponential;
    }
    
    
    for(let i = 1;i <= exponential; i++)
    {
        
        result = result * base;
    }
    return result
}

console.log(power(2,-4))