import { createModuleResolutionCache } from "typescript";

function MultiplyByLength(array:number[]){
    for(var i =0; i<array.length; i++)
        {
            console.log(array[i]*array.length)
        }
        console.log("-----------");
}
var array1:number[];
array1 = [2,3,1,0];

var array2:number[];
array2 = [4,1,1];

MultiplyByLength(array1);
MultiplyByLength(array2);