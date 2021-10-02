var array1:number[] = [2,8,7,5];
var array2:number[] = [12,90,75];
var odd:number;
var even:number;
function WarOfNumbers(array:number[])
{
    odd = 0;
    even = 0;
    for(var i:number =0; i< array.length; i++)
    {
        if(array[i]%2 == 0)
        {
            even +=array[i];
        }else{
            odd += array[i]
        }
        
    }
    if(odd<even)
        {
            var helper:number = even - odd;
            console.log("Even Wins with difference of "+helper);
        }
        else{
            var helper:number= odd-even;
            console.log("Odd Wins with difference of "+helper);
        }
}
WarOfNumbers(array1);
WarOfNumbers(array2);