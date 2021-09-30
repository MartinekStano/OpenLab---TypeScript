import { createModuleResolutionCache } from "typescript";

function CaptureTheRook(rook:string[]){
    if(rook[0].charAt(0) == rook[1].charAt(0) || rook[0].charAt(1) == rook[1].charAt(1))
    {
        return true;
    }
    else{
        return false;
    }
}
var rooks1:string[] = ["A8", "E8"];
var rooks2:string[] = ["A1", "B2"];

 console.log("Result is: "+CaptureTheRook(rooks1));
 console.log("Result is: "+CaptureTheRook(rooks2));