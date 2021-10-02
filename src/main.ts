var array1:number[] = [10,4,1,4,-10,-50,32,21];
var array2:number[] = [44,32,86,19];
function MaxMin(array:number[])
{
    var helper:number = 0;
    var max:number = Math.max(...array);
    var min:number = Math.min(...array);
    helper = max - min;
    console.log("The Biggest number is: "+max);
    console.log("The Smallest number is: "+min);
    console.log("Result is: "+helper);
    
}
MaxMin(array1);
MaxMin(array2);