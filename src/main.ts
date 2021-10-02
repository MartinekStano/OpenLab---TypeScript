let word1 = "abc"
let word2 = "c"

function StringEndWith(word1:string, word2:string)
{
    if(word1.endsWith(word2))
    {
        return true;
    }else{
        return false;
    }
}

console.log("Result is: "+StringEndWith(word1, word2))